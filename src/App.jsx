import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import WelcomePage from "./pages/WelcomePage";
import PredictionPage from "./pages/PredictionPage";
import FloatingBackground from "./components/FloatingBackground";

export default function App() {
  const [guestName, setGuestName] = useState("");

  return (
    <div className="relative overflow-hidden">

      <AnimatePresence mode="wait">

        {!guestName ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <WelcomePage onContinue={setGuestName} />
          </motion.div>
        ) : (
          <motion.div
            key="prediction"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
          >
            <PredictionPage guestName={guestName} />
          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
}