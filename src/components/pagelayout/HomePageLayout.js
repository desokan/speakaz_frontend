import TopMessage from "../landingpage/TopMessage";
import IntroCard from "../landingpage/IntroCard";
import OurPeople from "../landingpage/AboutUs";
import SelectedSpeakers from "../landingpage/SelectedSpeakers";
import SupportCentre from "../landingpage/SupportCentre";

const PageCentreLayout = () => {
  return (
    <div className="">
      <TopMessage></TopMessage>
      <IntroCard></IntroCard>
      <OurPeople></OurPeople>
      <SelectedSpeakers></SelectedSpeakers>
      <SupportCentre></SupportCentre>
    </div>
  );
};

export default PageCentreLayout;
