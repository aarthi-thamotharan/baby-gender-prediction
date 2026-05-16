import { guests, relationMessages, thankYouMessages } from "../data/guest_new";
import { useState, useRef, useMemo } from "react";
import Confetti from "react-confetti";
import html2canvas from "html2canvas-pro";

import babyLaugh from "../assets/sounds/baby-laughing-04.mp3";
import { playSound } from "../utils/playSound";
import FloatingBackground from "../components/FloatingBackground";

export default function PredictionPage({ guestName }) {
    const [selectedGender, setSelectedGender] = useState("");
    const [message, setMessage] = useState("");
    const [babyCallName, setBabyCallName] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [downloading, setDownloading] = useState(false);
    const [downloadError, setDownloadError] = useState("");
    const cardRef = useRef(null);

    const normalizedGuestName = guestName?.trim().toLowerCase();

    const findMatchedGuest = (name) => {
        if (!name) return null;

        const entries = Object.entries(guests);

        const exactMatch = entries.find(([, guest]) =>
            guest.keys?.some((key) => key === name)
        );
        if (exactMatch) return exactMatch;

        const exactKeyMatch = entries.find(([key, guest]) =>
            key === name || guest.keys?.some((alias) => alias === name)
        );
        if (exactKeyMatch) return exactKeyMatch;

        const partialMatch = entries.find(([key, guest]) => {
            const aliasMatch = guest.keys?.some((alias) =>
                alias.includes(name) || name.includes(alias)
            );
            const keyMatch = key.includes(name) || name.includes(key);
            return aliasMatch || keyMatch;
        });
        return partialMatch || null;
    };

    const matchedEntry = findMatchedGuest(normalizedGuestName);
    const matchedGuest = matchedEntry?.[1];
    const actualGuestName = matchedEntry?.[0] || guestName;
    const relation = matchedGuest?.relation;

    const relationEmojis = {
        ATHAI: "💕",
        MAMA: "🌟",
        CHITHI: "❤️",
        CHITHAPPA: "👶",
        THATHA: "❤️",
        PAATI: "💕",
        PERIYAMMA: "✨",
        APPA: "💙",
        AMMA: "💖",
    };

    const getRandomMessage = () => {
        if (!relationMessages || relationMessages.length === 0) {
            return "Thank you for being part of our journey 💕";
        }
        const randomMsg = relationMessages[Math.floor(Math.random() * relationMessages.length)];
        if (matchedGuest && relation) {
            const emoji = relationEmojis[relation] || "💕";
            return `${relation} ${emoji} ${randomMsg}`;
        }
        return randomMsg;
    };

    const displayMessage = useMemo(() => getRandomMessage(), [relation]);

    const firstLetter = actualGuestName?.trim()?.charAt(0)?.toUpperCase() || "G";
    const guest = matchedGuest;
    const hasGuestImage = Boolean(guest?.image);

    const titleCase = (value) =>
        value
            .split(" ")
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join(" ");

    const isAppaAmma = relation && ["APPA", "AMMA"].includes(relation);

    const displayName = `${!isAppaAmma ? titleCase(actualGuestName) : ""}${relation ? ` ${relation.toLowerCase()}` : ""}`;

    const pageThemeClasses = selectedGender === "boy"
        ? "bg-sky-100 text-sky-900"
        : selectedGender === "girl"
            ? "bg-pink-100 text-pink-900"
            : "bg-gradient-to-b from-pink-100 to-blue-100 text-slate-900";

    const textareaClasses = `w-full rounded-3xl p-3 sm:p-4 border-2 outline-none text-sm sm:text-base transition ${selectedGender === "boy"
            ? "border-sky-200 bg-sky-50 focus:border-sky-400 text-sky-900"
            : selectedGender === "girl"
                ? "border-pink-200 bg-pink-50 focus:border-pink-400 text-pink-900"
                : "border-pink-200 bg-pink-50 focus:border-pink-400 text-slate-900"
        }`;

    const handleSubmit = () => {
        if (selectedGender) {
            playSound(babyLaugh);
            setSubmitted(true);
        }
    }

    const downloadCard = async () => {
        if (!cardRef.current) return;

        try {
            setDownloading(true);
            setDownloadError("");

            const canvas = await html2canvas(cardRef.current, {
                scale: 3,
                useCORS: true,
                backgroundColor: null,
            });

            const image = canvas.toDataURL("image/png");

            const link = document.createElement("a");

            link.href = image;

            link.download = `prediction-card-${guestName
                .toLowerCase()
                .replace(/\s+/g, "-")}.png`;

            link.click();

        } catch (error) {
            console.error(error);
            setDownloadError("Unable to download card.");
        } finally {
            setDownloading(false);
        }
    };

    const thankYouMessage = useMemo(() => {
        if (!thankYouMessages || !selectedGender || thankYouMessages[selectedGender].length === 0) {
            return "Your love and blessings mean the world to us!";
        }
        return thankYouMessages[selectedGender][Math.floor(Math.random() * thankYouMessages[selectedGender].length)];
    }, [selectedGender]);

    return (
        <div className={`min-h-screen ${pageThemeClasses} p-4 sm:p-6 flex items-center justify-center`}>
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-4 sm:p-6 w-full max-w-[min(95vw,420px)] sm:max-w-xl md:max-w-md shadow-2xl">
                {submitted ? (
                    <>
                        <div
                            ref={cardRef}
                            className="w-[350px] max-w-full mx-auto text-center bg-white rounded-3xl p-6 overflow-hidden"
                            style={{
                                transform: "scale(1)",
                            }}
                        >
                            {hasGuestImage ? (
                                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full mx-auto overflow-hidden border-4 border-white shadow-lg">
                                    <img
                                        src={guest.image}
                                        alt="guest"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full mx-auto flex items-center justify-center bg-gradient-to-br from-pink-400 to-purple-500 text-white text-3xl sm:text-4xl font-black shadow-xl border-4 border-white">
                                    {firstLetter}
                                </div>
                            )}

                            <div className="mt-4 inline-flex flex-col items-center gap-4 rounded-3xl p-4 sm:p-6 shadow-lg border border-white"
                                style={{
                                    background: "linear-gradient(to right, #dbeafe, #fce7f3)"
                                }}
                            >
                                <div className={`text-3xl sm:text-4xl font-black tracking-tight ${selectedGender === "boy" ? "text-blue-600" : "text-pink-600"}`}>
                                    {selectedGender === "boy" ? "💙 BOY" : "💖 GIRL"}
                                </div>
                            </div>

                            <h2 className="text-xl sm:text-2xl font-bold text-center mt-4">
                                Thank you, {displayName}!
                            </h2>

                            <p className="text-center text-gray-600 mt-4 text-sm sm:text-base">
                                {thankYouMessage}
                            </p>

                            {(message || babyCallName) && (
                                <div className={`mt-4 rounded-3xl border ${selectedGender === "boy" ? "border-blue-200 bg-blue-50" : "border-pink-200 bg-pink-50"} p-4 sm:p-5 text-left text-gray-700`}>
                                    <p className={`text-xs sm:text-sm uppercase tracking-[0.15em] ${selectedGender === "boy" ? "text-blue-600" : "text-pink-600"} font-semibold mb-2`}>
                                        Your message
                                    </p>

                                    {message ? (
                                        <p className="text-sm sm:text-base">{message}</p>
                                    ) : (
                                        <p className="text-sm sm:text-base text-slate-600">No message, just love 💌</p>
                                    )}

                                    {babyCallName && (
                                        <p className="mt-4 text-sm sm:text-base uppercase tracking-[0.1em] text-slate-500">
                                            Baby nickname vibes: <span className="font-semibold text-slate-800">{babyCallName}</span>
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>

                        <button
                            onClick={downloadCard}
                            disabled={downloading}
                            className="mt-4 w-full bg-black text-white p-4 sm:p-5 rounded-3xl text-base sm:text-lg font-bold shadow-lg hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {downloading
                                ? "Preparing download..."
                                : "Download Prediction Card"}
                        </button>

                        <div className="mt-4 bg-yellow-50 border-2 border-yellow-200 rounded-3xl p-4 text-center">
                            <p className="text-sm sm:text-base text-yellow-800">
                                📲 Please share this card with my appa and amma! They would love to see your prediction.
                            </p>
                        </div>

                        {downloadError && (
                            <p className="mt-4 text-sm sm:text-base text-red-500">
                                {downloadError}
                            </p>
                        )}
                    </>
                ) : (
                    <>
                        {hasGuestImage ? (
                            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full mx-auto overflow-hidden border-4 border-white shadow-lg">
                                <img
                                    src={guest.image}
                                    alt="guest"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ) : (
                            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full mx-auto flex items-center justify-center bg-gradient-to-br from-pink-400 to-purple-500 text-white text-4xl sm:text-5xl font-black shadow-xl border-4 border-white">
                                {firstLetter}
                            </div>
                        )}

                        <h2 className="text-xl sm:text-2xl font-bold text-center mt-4">
                            Hi {displayName} ✨
                        </h2>

                        <p className="text-center text-gray-600 mt-3 text-sm sm:text-base">
                            {displayMessage}
                        </p>

                        <div className="mt-4">
                            <div className="flex flex-col sm:flex-row gap-4">

                                <button
                                    onClick={() => setSelectedGender("boy")}
                                    className={`flex-1 p-4 sm:p-5 rounded-3xl transition-all duration-300 text-base sm:text-lg font-bold shadow-lg ${selectedGender === "boy"
                                            ? "bg-blue-400 text-white scale-105"
                                            : "bg-blue-100 hover:scale-105"
                                        }`}
                                >
                                    {selectedGender === "boy" ? "☀️ Boy" : "💙 Boy"}
                                </button>

                                <button
                                    onClick={() => setSelectedGender("girl")}
                                    className={`flex-1 p-4 sm:p-5 rounded-3xl transition-all duration-300 text-base sm:text-lg font-bold shadow-lg ${selectedGender === "girl"
                                            ? "bg-pink-400 text-white scale-105"
                                            : "bg-pink-100 hover:scale-105"
                                        }`}
                                >
                                    {selectedGender === "girl" ? "🌙 Girl": "💖 Girl"}
                                </button>
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                How would you like to call the baby?
                            </label>
                            <textarea
                                rows={1}
                                value={babyCallName}
                                onChange={(e) => setBabyCallName(e.target.value)}
                                placeholder="Enter a cute nickname for the baby 🍼"
                                className={textareaClasses}
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Any sweet message for the baby?
                            </label>
                            <textarea
                                placeholder="Leave a sweet message for the baby 💌"
                                rows={5}
                                className={textareaClasses}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>

                        <button
                            onClick={handleSubmit}
                            className="mt-4 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 sm:p-5 rounded-3xl text-sm sm:text-base font-bold shadow-lg hover:scale-105 transition"
                        >
                            Submit Prediction ✨
                        </button>
                    </>
                )}
            </div>
            <FloatingBackground />
            {submitted &&
                <Confetti
                    numberOfPieces={250}
                    recycle={false}
                />}
        </div>
    );
}