import { motion } from "framer-motion";
import logo from "../assets/logo.svg";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FAF7F0]">
      
      <div className="flex flex-col items-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            src={logo}
            alt="Rajdhani Dryfruits"
            className="w-40 sm:w-48 h-auto object-contain"
          />
        </motion.div>

        {/* Loading line */}
        <div className="mt-8 w-32 sm:w-40 h-[2px] bg-[#E8DFD0] overflow-hidden rounded-full">
          <motion.div
            className="h-full bg-[#C89B3C] rounded-full"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="
            mt-4
            text-[10px]
            sm:text-xs
            uppercase
            tracking-[0.3em]
            text-[#0F2B20]/60
          "
        >
          Preparing something special
        </motion.p>

      </div>

    </div>
  );
};

export default PageLoader;