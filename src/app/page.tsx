import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import TestimonoalCards from "@/components/TestimonoalCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    <TestimonoalCards/>
    <UpcomingWebinar/>
    <Instructor/>
    <Footer/>
    </div>
  );
}
