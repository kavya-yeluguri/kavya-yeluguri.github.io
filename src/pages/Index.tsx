
import Hero from '@/components/Hero';
import SkillsMarquee from '@/components/SkillsMarquee';
import Projects from '@/components/Projects';
import About from '@/components/About';
import SocialIsland from '@/components/SocialIsland';
import ContactFooter from '@/components/ContactFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SkillsMarquee />
      <About />
      <Projects />
      <ContactFooter />
      <SocialIsland />
    </div>
  );
};

export default Index;
