import { useState } from "react";

export default function WelcomePage({ onContinue }) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleContinue = () => {
    const trimmed = name.trim();

    if (!trimmed) {
      setError(
        "Tiny human cannot identify you without a name 👶"
      );
      return;
    }

    setError("");
    onContinue(trimmed);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-blue-100 flex items-center justify-center p-4 sm:p-6">

      <div className="bg-white/80 backdrop-blur-lg w-full max-w-[min(95vw,420px)] sm:max-w-xl md:max-w-md rounded-[32px] p-5 sm:p-8 shadow-2xl text-center border border-white/40">

        <div className="text-5xl sm:text-6xl mb-4 animate-bounce">
          👶
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 leading-tight text-pink-600">
          Tiny Human Incoming 🚨
        </h1>

        <p className="text-gray-600 mb-2 text-sm sm:text-base">
          Someone inside amma’s tummy 👀 is impatiently waiting for your expert-level prediction on whether
          they’re a dramatic baby girl 💖 or chaotic baby boy 💙
        </p>

        <input
          type="text"
          placeholder="Enter your name ✨"
          className="w-full border-2 border-pink-200 bg-white/70 p-3 sm:p-4 rounded-2xl outline-none focus:border-pink-400 transition text-sm sm:text-base"
          value={name}
          onChange={(e) => {
            setName(e.target.value);

            if (error) {
              setError("");
            }
          }}
        />

        {error && (
          <p className="mt-3 text-sm sm:text-base text-red-500">
            {error}
          </p>
        )}

        <button
          onClick={handleContinue}
          disabled={!name.trim()}
          className={`mt-6 w-full p-4 sm:p-5 rounded-2xl text-sm sm:text-base font-bold transition-all duration-300 shadow-lg ${
            name.trim()
              ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:scale-105"
              : "bg-pink-200 text-gray-500 cursor-not-allowed"
          }`}
        >
          Let's predict! 🚀
        </button>

      </div>
    </div>
  );
}