import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import svgPaths from "./svg-iu8vadswdw";
import { portfolioConfig } from "@/config/portfolio";
import SharedNavigation from "./SharedNavigation";

function CircleIcon({ animate = false }) {
  return (
    <motion.div
      className="w-12 h-12"
      animate={animate ? { scale: [1, 1.2, 1] } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <svg className="block size-full" fill="none" viewBox="0 0 38 38">
        <g clipPath="url(#clip0_2_86)">
          <path d={svgPaths.p21c04900} fill="#aecfdc" />
        </g>
        <defs>
          <clipPath id="clip0_2_86">
            <rect fill="white" height="38" width="38" />
          </clipPath>
        </defs>
      </svg>
    </motion.div>
  );
}

function AboutHeader() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1, once: false });

  return (
    <motion.section
      ref={ref}
      className="bg-white/25 backdrop-blur-[10px] border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[30px] p-8 mx-4 mt-20 mb-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex items-start gap-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <CircleIcon animate={inView} />
        <div>
          <h1 className="font-medium text-[#000000] text-[40px] sm:text-[48px] mb-2">
            About {portfolioConfig.personal.firstName}
          </h1>
          <p className="font-light italic text-[#000000]/70 text-[18px]">
            {portfolioConfig.personal.title}
          </p>
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#aecfdc]/20 rounded-full"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.section>
  );
}

function BioSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1, once: false });

  return (
    <motion.section
      ref={ref}
      className="bg-white/25 backdrop-blur-[10px] border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[30px] p-8 mx-4 mb-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="font-medium text-[#000000] text-[28px] mb-6"
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        My Story
      </motion.h2>

      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <p className="font-light text-[#000000] text-[18px] leading-7">
          {portfolioConfig.about.philosophy}
        </p>

        <p className="font-light text-[#000000] text-[18px] leading-7">
          {portfolioConfig.about.approach}
        </p>

        <p className="font-light text-[#000000] text-[18px] leading-7">
          {portfolioConfig.personal.description}
        </p>
      </motion.div>

      <motion.div
        className="absolute -top-6 -left-6 w-16 h-16 bg-[#aecfdc]/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </motion.section>
  );
}

function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1, once: false });

  const stats = [
    {
      number: portfolioConfig.projects.length.toString(),
      label: "Projects Completed",
      desc: "Innovative solutions delivered",
    },
    {
      number: "3+",
      label: "Years Experience",
      desc: "Professional background",
    },
    { number: "10+", label: "Core Skills", desc: "Technical expertise areas" },
    {
      number: portfolioConfig.social.length.toString(),
      label: "Social Platforms",
      desc: "Ways to connect",
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="bg-white/25 backdrop-blur-[10px] border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[30px] p-8 mx-4 mb-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="font-medium text-[#000000] text-[28px] mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        By the Numbers
      </motion.h2>

      <div className="grid grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center p-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={
              inView ? { scale: 1, opacity: 1 } : { scale: 1, opacity: 1 }
            }
            transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
          >
            <div className="font-bold text-[#000000] text-[36px] mb-2">
              {stat.number}
            </div>
            <div className="font-medium text-[#000000] text-[16px] mb-1">
              {stat.label}
            </div>
            <div className="font-light text-[#000000]/60 text-[12px]">
              {stat.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1, once: false });

  const skills = [
    {
      category: "Technical",
      items: portfolioConfig.skills.technical,
    },
    {
      category: "DSA",
      items: portfolioConfig.skills.dsa,
    },
    {
      category: "AI/ML",
      items: portfolioConfig.skills.aiml,
    },
    { 
      category: "Tools", 
      items: portfolioConfig.skills.tools 
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="bg-white/25 backdrop-blur-[10px] border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[30px] p-8 mx-4 mb-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="font-medium text-[#000000] text-[28px] mb-8"
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Skills & Expertise
      </motion.h2>

      <div className="space-y-6">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            className="border-b border-[#aecfdc]/30 pb-6 last:border-b-0"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
          >
            <h3 className="font-medium text-[#000000] text-[20px] mb-3">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  className="px-3 py-2 bg-[#aecfdc]/20 rounded-full text-[14px] font-light text-[#1d1d1f]"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={
                    inView ? { scale: 1, opacity: 1 } : { scale: 1, opacity: 1 }
                  }
                  transition={{ delay: 0.5 + skillIndex * 0.05, duration: 0.3 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function ContactInfo() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1, once: false });

  const contactItems = [
    {
      icon: MapPin,
      label: "Location",
      value: portfolioConfig.contact.location,
    },
    { icon: Mail, label: "Email", value: portfolioConfig.contact.email },
    ...(portfolioConfig.contact.phone
      ? [{ icon: Phone, label: "Phone", value: portfolioConfig.contact.phone }]
      : []),
  ];

  return (
    <motion.section
      ref={ref}
      className="bg-[#e3f2f9] rounded-[30px] p-8 mx-4 mb-12 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="font-medium text-[#000000] text-[28px] mb-6"
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>

      <div className="space-y-4">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
            >
              <div className="w-10 h-10 bg-[#aecfdc]/20 rounded-full flex items-center justify-center">
                <Icon size={18} className="text-[#000000]" />
              </div>
              <div>
                <div className="font-medium text-[#000000] text-[14px]">
                  {item.label}
                </div>
                <div className="font-light text-[#000000] text-[16px]">
                  {item.value}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

export default function AboutPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="pb-12">
      <AboutHeader />
      <BioSection />
      <StatsSection />
      <SkillsSection />
      <ContactInfo />
      {onNavigate && <SharedNavigation currentPage="about" onNavigate={onNavigate} />}
    </div>
  );
}
