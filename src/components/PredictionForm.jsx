import { useState } from "react";

export default function PredictionForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");
  const [video, setVideo] = useState(null);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Guess the Baby Gender 👶
      </h2>

      <input
        type="text"
        placeholder="Your Name"
        className="w-full border p-3 rounded-lg mb-4"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="mb-4">
        <p className="mb-2 font-medium">Your Guess</p>

        <div className="flex gap-4">
          <button
            onClick={() => setGender("boy")}
            className={`flex-1 p-3 rounded-lg border ${
              gender === "boy"
                ? "bg-blue-500 text-white"
                : ""
            }`}
          >
            Boy 💙
          </button>

          <button
            onClick={() => setGender("girl")}
            className={`flex-1 p-3 rounded-lg border ${
              gender === "girl"
                ? "bg-pink-500 text-white"
                : ""
            }`}
          >
            Girl 💖
          </button>
        </div>
      </div>

      <textarea
        placeholder="Message for parents"
        className="w-full border p-3 rounded-lg mb-4"
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <input
        type="file"
        accept="video/*"
        capture="user"
        className="mb-4"
        onChange={(e) => setVideo(e.target.files[0])}
      />

      {video && (
        <p className="text-sm mb-4">
          Selected: {video.name}
        </p>
      )}

      <button className="w-full bg-black text-white p-3 rounded-lg">
        Submit Prediction
      </button>
    </div>
  );
}