import Header from "../../components/about/Header.tsx"
import Story from "../../components/about/Story.tsx";
import Mission from "../../components/about/Mission.tsx";
import Tutor from "../../components/about/Tutor.tsx";
import CTA from "../../components/about/CTA.tsx";

export default function About() {
    return (
        <div>
            <Header />
            <Story />
            <Mission />
            <Tutor />
            <CTA />
        </div>
    );
}
