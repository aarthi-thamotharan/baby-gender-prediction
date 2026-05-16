import { motion } from "framer-motion";

export default function FloatingBackground() {
  const items = ["✨", "⭐", "☁️", "🧸", "👶", "🍼", "🎀", "🛏️", "🧦", "👼"];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">

      {items.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl sm:text-3xl md:text-4xl opacity-20 sm:opacity-30"
          initial={{
            y: "100vh",
            x: `${Math.random() * 100}vw`,
          }}
          animate={{
            y: "-20vh",
          }}
          transition={{
            duration: 10 + Math.random() * 50,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
          style={{ willChange: "transform" }}
          aria-hidden="true"
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}