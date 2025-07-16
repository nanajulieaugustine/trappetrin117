import FirstSection from "@/components/omos/FirstSection";
import SecondSection from "@/components/omos/SecondSection";
import LineAnimationInView from "@/components/animationer/LineAnimationINView";
import ThirdSection from "@/components/omos/ThirdSection";
import ParallaxText from "@/components/omos/ParallaxText";

export const metadata = {
  title: "Om Os | Trappetrin 177",
  description: "Trappetrin 117 er skabt af to unge skuespilleraspiranter fra Holbæk. Sarah og Josefine er begge to dimitterede fra Holbæk Drama College i 2023. Nu søger de at videreudvikle deres talent som skuespillere, inden de går videre med drømmen om at blive professionelle skuespillere.",
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