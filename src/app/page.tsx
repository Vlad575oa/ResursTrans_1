import { Navigation } from "@/components/ui/Navigation";
import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";

// Below-the-fold sections
const PainPoints = dynamic(() => import("@/components/sections/PainPoints").then(m => m.PainPoints));
const Solutions = dynamic(() => import("@/components/sections/Solutions").then(m => m.Solutions));
const SocialProof = dynamic(() => import("@/components/sections/SocialProof").then(m => m.SocialProof));
const Ecosystem = dynamic(() => import("@/components/sections/Ecosystem").then(m => m.Ecosystem));
const EconomicEffect = dynamic(() => import("@/components/sections/EconomicEffect").then(m => m.EconomicEffect));
const Workflow = dynamic(() => import("@/components/sections/Workflow").then(m => m.Workflow));
const Technology = dynamic(() => import("@/components/sections/Technology").then(m => m.Technology));
const Guarantees = dynamic(() => import("@/components/sections/Guarantees").then(m => m.Guarantees));
const Faq = dynamic(() => import("@/components/sections/Faq").then(m => m.Faq));
const TargetAudience = dynamic(() => import("@/components/sections/TargetAudience").then(m => m.TargetAudience));
const Clients = dynamic(() => import("@/components/sections/Clients").then(m => m.Clients));
const Calculator = dynamic(() => import("@/components/sections/Calculator").then(m => m.Calculator));
const Cases = dynamic(() => import("@/components/sections/Cases").then(m => m.Cases));
const CallToAction = dynamic(() => import("@/components/sections/CallToAction").then(m => m.CallToAction));
const TrustMarquee = dynamic(() => import("@/components/sections/TrustMarquee").then(m => m.TrustMarquee));
const Footer = dynamic(() => import("@/components/sections/Footer").then(m => m.Footer));

// Heavy UI components
const AiAssistant = dynamic(() => import("@/components/ui/AiAssistant").then(m => m.AiAssistant));
const MobileActionBar = dynamic(() => import("@/components/ui/MobileActionBar").then(m => m.MobileActionBar));
const LiquidFilter = dynamic(() => import("@/components/ui/LiquidFilter").then(m => m.LiquidFilter));

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-burnt-terra selection:text-white font-sans">
      <LiquidFilter />
      <Navigation />
      <MobileActionBar />
      <AiAssistant />

      <Hero />
      <TrustMarquee />
      <PainPoints />
      <Solutions />
      <SocialProof />
      {/* <Ecosystem /> */}
      {/* <EconomicEffect /> */}
      <Workflow />
      <Technology />
      <Guarantees />
      <Faq />
      {/* <ManagementModel /> */}
      {/* <TargetAudience /> */}
      {/* <Clients /> */}
      {/* <Calculator /> */}
      <Cases />
      <CallToAction />

      <Footer />
    </main>
  );
}
