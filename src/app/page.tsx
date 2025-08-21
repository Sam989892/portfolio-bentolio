import ResponsivePortfolio from "@/components/ui/ResponsivePortfolio";

export default function Home() {
  return (
    <div 
      className="h-screen w-screen overflow-auto relative" 
      style={{ 
        backgroundImage: "url('/dreamy-fabrica-bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <ResponsivePortfolio />
    </div>
  );
}