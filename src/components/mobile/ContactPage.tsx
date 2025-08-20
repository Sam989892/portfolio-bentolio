import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Send } from "lucide-react";
import svgPaths from "./svg-iu8vadswdw";
import { portfolioConfig } from "@/config/portfolio";
import SharedNavigation from "./SharedNavigation";

function ContactHeader() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1, once: false });

  return (
    <motion.section
      ref={ref}
      className="bg-gradient-to-br from-[#aecfdc] to-[#aecfdc]/80 rounded-[30px] p-8 mx-4 mt-20 mb-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex items-center justify-between mb-8"
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div>
          <div className="font-light text-[#000000] text-[16px] mb-2">
            <p>Ready to collaborate?</p>
            <p>Let&apos;s create something amazing</p>
          </div>
        </div>
        <motion.div
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[#000000]/10"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <svg className="block w-6 h-6" fill="none" viewBox="0 0 38 38">
            <path
              clipRule="evenodd"
              d={svgPaths.p17200c00}
              fill="black"
              fillRule="evenodd"
            />
          </svg>
        </motion.div>
      </motion.div>

      <motion.h1
        className="font-medium text-[#000000] text-[40px] sm:text-[52px] mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Contact Me
      </motion.h1>

      <motion.p
        className="font-light text-[#000000] text-[18px] leading-7 max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Whether you&apos;re interested in collaboration, have questions about my
        work, or want to discuss a potential project, I&apos;d love to hear from
        you.
      </motion.p>

      <motion.div
        className="absolute -bottom-8 -right-8 w-28 h-28 bg-[#ffffff]/20 rounded-full"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.section>
  );
}

function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1, once: false });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  return (
    <motion.section
      ref={ref}
      className="bg-[#e3f2f9] rounded-[30px] p-8 mx-4 mb-8 relative overflow-hidden"
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
        Send Me a Message
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <label className="block font-medium text-[#000000] text-[14px] mb-2">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-[#aecfdc]/10 border border-[#aecfdc]/20 rounded-[15px] font-light text-[#000000] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#aecfdc]/50 focus:border-transparent transition-all"
              placeholder="Your full name"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <label className="block font-medium text-[#000000] text-[14px] mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-[#aecfdc]/10 border border-[#aecfdc]/20 rounded-[15px] font-light text-[#000000] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#aecfdc]/50 focus:border-transparent transition-all"
              placeholder="your.email@example.com"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <label className="block font-medium text-[#000000] text-[14px] mb-2">
            Subject *
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-[#aecfdc]/10 border border-[#aecfdc]/20 rounded-[15px] font-light text-[#000000] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#aecfdc]/50 focus:border-transparent transition-all"
            placeholder="What would you like to discuss?"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <label className="block font-medium text-[#000000] text-[14px] mb-2">
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-[#aecfdc]/10 border border-[#aecfdc]/20 rounded-[15px] font-light text-[#000000] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#aecfdc]/50 focus:border-transparent transition-all resize-none"
            placeholder="Tell me about your project or inquiry..."
          />
        </motion.div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#000000] text-white px-8 py-4 rounded-full font-medium text-[16px] flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
              />
              Sending...
            </>
          ) : (
            <>
              <Send size={16} />
              Send Message
            </>
          )}
        </motion.button>
      </motion.form>

      <motion.div
        className="absolute -top-6 -right-6 w-16 h-16 bg-[#aecfdc]/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </motion.section>
  );
}

function ContactInfo() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1, once: false });

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: portfolioConfig.contact.email,
      description: "For general inquiries and collaborations",
    },
    ...(portfolioConfig.contact.phone
      ? [
          {
            icon: Phone,
            title: "Phone",
            value: portfolioConfig.contact.phone,
            description: "Available for professional discussions",
          },
        ]
      : []),
    {
      icon: MapPin,
      title: "Location",
      value: portfolioConfig.contact.location,
      description: "Available for meetings and consultations",
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="bg-gradient-to-br from-[#e3f2f9] to-[#e3f2f9]/70 rounded-[30px] p-8 mx-4 mb-8 relative overflow-hidden"
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
        Other Ways to Reach Me
      </motion.h2>

      <div className="space-y-6">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <motion.div
              key={method.title}
              className="flex items-start gap-4 p-4 bg-[#aecfdc]/10 rounded-[20px]"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-[#aecfdc]/30 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon size={20} className="text-[#000000]" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-[#000000] text-[18px] mb-1">
                  {method.title}
                </h3>
                <p className="font-light text-[#000000] text-[16px] mb-2">
                  {method.value}
                </p>
                <p className="font-light text-[#000000]/60 text-[14px]">
                  {method.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

function SocialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1, once: false });
  const socials = portfolioConfig.social.map((social) => ({
    name: social.name,
    handle: social.handle || social.url,
    url: social.url,
  }));

  return (
    <motion.section
      ref={ref}
      className="bg-[#e3f2f9] rounded-[30px] p-8 mx-4 mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="font-medium text-[#000000] text-[28px] mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Follow My Journey
      </motion.h2>

      <div className="space-y-4">
        {socials.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-[#aecfdc]/10 rounded-[20px] border border-[#aecfdc]/20"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(174, 207, 220, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div>
              <div className="font-medium text-[#000000] text-[18px]">
                {social.name}
              </div>
              <div className="font-light text-[#000000]/60 text-[14px]">
                {social.handle}
              </div>
            </div>
            <ArrowRight size={20} className="text-[#000000]" />
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}

export default function ContactPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="pb-12">
      <ContactHeader />
      <ContactForm />
      <ContactInfo />
      <SocialsSection />
      {onNavigate && <SharedNavigation currentPage="contact" onNavigate={onNavigate} />}
    </div>
  );
}
