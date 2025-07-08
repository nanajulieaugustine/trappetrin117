import FirstSection from "@/components/omos/FirstSection";
import SecondSection from "@/components/omos/SecondSection";
import LineAnimationInView from "@/components/animationer/LineAnimationINView";
import ThirdSection from "@/components/omos/ThirsSection";
import ParallaxText from "@/components/omos/ParallaxText";

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