import React from 'react';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import PracticeAreas from '../components/PracticeAreas';
import Counter from '../components/Counter';
import VideoSection from '../components/VideoSection';
import CallToAction from '../components/CallToAction';
import Testimonials from '../components/Testimonials';
import ConsultationForm from '../components/ConsultationForm';
import Blog from '../components/Blog';
import Attorneys from '../components/Attorneys';
import IntroSection from '../components/IntroSection';
import GoToTop from '../components/GoToTop';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <PracticeAreas />
      <Counter />
      <VideoSection />
      <PracticeAreas 
        title="Practice Area"
        description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
        showViewMore={true}
      />
      <CallToAction />
      <Testimonials />
      <ConsultationForm />
      <Blog />
      <Attorneys />
      <IntroSection />
      <GoToTop />
    </>
  );
};

export default HomePage;
