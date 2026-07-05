import Header from "../../components/subjects/Header.tsx";
import Maths from "../../components/subjects/Maths.tsx";
import Physics from "../../components/subjects/Physics.tsx";
import Sessions from "../../components/subjects/Sessions.tsx";

export default function Subjects() {
    return (
        <div>
            <Header />
            <Maths />
            <Physics />
            <Sessions />
        </div>
    );
}