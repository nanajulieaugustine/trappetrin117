import FirstSection from "@/components/omos/FirstSection";
import SecondSection from "@/components/omos/SecondSection";
import LineAnimationInView from "@/components/animationer/LineAnimationINView";
import ThirdSection from "@/components/omos/ThirdSection";
import ParallaxText from "@/components/omos/ParallaxText";

export const metadata = {
  title: "Om Os | Trappetrin 177",
  description: "Hvad er Trappetrin 177? Beskrivelse af hvor vi startede, hvorfor vælg os?",
};

const OmOs = () => {
    return ( <div>
        <FirstSection/>
        <div className="mt-20 mb-20 px-(--content-width)">
            <LineAnimationInView/>
        </div>
        <SecondSection/>
        <ParallaxText/>
        <ThirdSection/>
    </div> );
}
 
export default OmOs;