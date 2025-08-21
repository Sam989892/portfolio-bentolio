import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import svgPaths from "./svg-iu8vadswdw";
import { portfolioConfig } from "@/config/portfolio";
import SharedNavigation from "./SharedNavigation";

function FlowerIcon({ animate = false }) {
  return (
    <motion.div
      className="w-16 h-16 sm:w-20 sm:h-20"
      animate={animate ? { rotate: [0, 360] } : {}}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 119 119"
      >
        <g clipPath="url(#clip0_2_74)">
          <path d={svgPaths.p12a08980} fill="#a855f7" />
        </g>
        <defs>
          <clipPath id="clip0_2_74">
            <rect fill="white" height="119" width="119" />
          </clipPath>
        </defs>
      </svg>
    </motion.div>
  );
}

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <motion.section
      style={{ y }}
      className="bg-white/25 backdrop-blur-[10px] border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[30px] p-8 mx-4 mt-20 mb-6 relative overflow-hidden min-h-[400px] flex items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-sm z-10"
      >
        <motion.h1
          className="font-bold text-[#1d1d1f] text-[36px] sm:text-[44px] leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {
              portfolioConfig.personal.title.split(
                portfolioConfig.personal.curvedText
              )[0]
            }
          </motion.span>
          <motion.span
            className="font-light italic text-purple-600"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, type: "spring" }}
          >
            {portfolioConfig.personal.curvedText}
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            {
              portfolioConfig.personal.title.split(
                portfolioConfig.personal.curvedText
              )[1]
            }
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="font-light text-[#1d1d1f]/80 text-[16px] leading-6"
        >
          {portfolioConfig.personal.description}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.8, type: "spring" }}
        className="absolute top-6 right-6"
      >
        <FlowerIcon animate={true} />
      </motion.div>

      <motion.div
        className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#a855f7]/20 rounded-full"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.section>
  );
}

function PortraitSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1, once: false });

  return (
    <motion.section
      ref={ref}
      className="mx-4 mt-6 mb-6 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="h-[350px] sm:h-[450px] overflow-hidden rounded-[25px] relative"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-full h-[120%] -mt-6 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url('/portrait.webp')` }}
          initial={{ scale: 1.1 }}
          animate={inView ? { scale: 1 } : { scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/20 to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute -bottom-4 -right-2 bg-white/25 backdrop-blur-[10px] border border-white/30 rounded-[20px] p-4 shadow-lg max-w-[200px]"
      >
        <p className="font-light italic text-[#1d1d1f] text-[12px]">
          &quot;AI is not replacing creativity, it&apos;s amplifying it&quot;
        </p>
      </motion.div>
    </motion.section>
  );
}

function IntroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1, once: false });

  return (
    <motion.section
      ref={ref}
      className="bg-white/25 backdrop-blur-[10px] border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[30px] p-8 mx-4 mt-6 mb-12 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="font-medium text-[#1d1d1f] text-[28px] mb-6"
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {portfolioConfig.about.intro}
      </motion.h2>

      <motion.p
        className="font-light text-[#1d1d1f] text-[18px] leading-7 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {portfolioConfig.about.approach}
      </motion.p>

      <motion.div
        className="grid grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        {portfolioConfig.about.specialties.map((item, index) => (
          <motion.div
            key={item.title}
            className="text-center p-4"
            initial={{ scale: 0.8 }}
            animate={inView ? { scale: 1 } : { scale: 1 }}
            transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
          >
            <div className="text-[32px] mb-2">{item.icon}</div>
            <div className="font-medium text-[16px] mb-1">{item.title}</div>
            <div className="font-light text-[12px] text-[#1d1d1f]/60">
              {item.description}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}


export default function HomePage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div>
      <HeroSection />
      <PortraitSection />
      <IntroSection />
      {onNavigate && <SharedNavigation currentPage="home" onNavigate={onNavigate} />}
    </div>
  );
}
