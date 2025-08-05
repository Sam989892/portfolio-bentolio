import Bentolio from "@/components/ui/bentolio";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-auto" style={{ backgroundColor: "#f9fcff" }}>
      <Bentolio
        bg="#e3f2f9"
        secondary="#aecfdc"
        secondaryTextColor="#1d1d1f"
        name={{
          first: "SAIYED",
          last: "MADNI",
        }}
        title="Full Stack Developer Creating Amazing Web Experiences"
        curvedText="Creating"
        description="Alex is a passionate full-stack developer with expertise in React, Next.js, and Node.js. Based in San Francisco, creating innovative web applications that solve real-world problems."
        projects={[
          {
            name: "E-Commerce Platform",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
            link: "#",
          },
          { name: "Task Manager", link: "#" },
          { name: "Chat Application", link: "#" },
          { name: "Portfolio Website", link: "#" },
        ]}
        profileImage="/portrait.jpeg"
        socialLinks={[
          {
            name: "GitHub",
            url: "https://github.com",
          },
          {
            name: "LinkedIn",
            url: "https://linkedin.com",
          },
          {
            name: "Twitter",
            url: "https://twitter.com",
          },
        ]}
        contactLink="mailto:alex@example.com"
        navLinks={["HOME", "PROJECTS", "ABOUT", "CONTACT"]}
      />
    </div>
  );
}