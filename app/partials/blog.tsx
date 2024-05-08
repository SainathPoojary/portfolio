import { motion } from "framer-motion";
import Hero from "../components/hero";

export default function Blog() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-3/4 mx-auto flex py-20 justify-center items-center flex-col"
    >
      <Hero />
    </motion.main>
  );
}
