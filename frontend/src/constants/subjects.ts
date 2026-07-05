import { Atom, Calculator } from "lucide-react";
import { MATHS_TOPICS, PHYSICS_TOPICS } from "./topics.ts";

const subjects = [
    {
        icon: Calculator, color: "blue", subject: "Mathematics", grades: "Grade 10 · 11 · 12",
        desc: "From algebra and geometry to calculus and financial maths — we break every concept down step by step and drill past papers until confidence clicks.",
        topics: MATHS_TOPICS.slice(0, 4),
    },
    {
        icon: Atom, color: "indigo", subject: "Physical Sciences (Physics)", grades: "Grade 10 · 11 · 12",
        desc: "Mechanics, waves, electricity, matter and more — taught with real-world examples that make abstract theory feel logical and learnable.",
        topics: PHYSICS_TOPICS.slice(0, 4),
    },
]

export default subjects;