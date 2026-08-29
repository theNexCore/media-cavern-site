import Hero from "@/components/home/Hero";
import MoreThanAStore from "@/components/home/MoreThanAStore";
import ExploreTheCavern from "@/components/home/ExploreTheCavern";
import PhotoExperience from "@/components/home/PhotoExperience";
import AudioVideo from "@/components/home/AudioVideo";
import LiveAtTheCavern from "@/components/home/LiveAtTheCavern";
import ThePiano from "@/components/home/ThePiano";
import StoryTeaser from "@/components/home/StoryTeaser";
import SoCoSpotlight from "@/components/home/SoCoSpotlight";
import Chamber from "@/components/home/Chamber";
import Shipping from "@/components/home/Shipping";
import Social from "@/components/home/Social";
import VisitCta from "@/components/home/VisitCta";

/* Homepage — sections 1-13, complete. */

export default function HomePage() {
  return (
    <>
      <Hero />
      <MoreThanAStore />
      <ExploreTheCavern />
      <PhotoExperience />
      <AudioVideo />
      <LiveAtTheCavern />
      <ThePiano />
      <StoryTeaser />
      <SoCoSpotlight />
      <Chamber />
      <Shipping />
      <Social />
      <VisitCta />
    </>
  );
}
