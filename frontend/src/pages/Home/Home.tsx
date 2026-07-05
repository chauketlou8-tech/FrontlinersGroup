import HeroBanner from "../../components/home/HeroBanner.tsx";
import PromoBanner from "../../components/home/PromoBanner.tsx";
import SubjectsPreview from "../../components/home/SubjectsPreview.tsx";
import WhyUs from "../../components/home/WhyUs.tsx";
import CTA from "../../components/home/CTA";

export default function Home() {
    return (
        <div>
            <HeroBanner />
            <PromoBanner />
            <SubjectsPreview />
            <WhyUs />
            <CTA />
        </div>
    );
}
