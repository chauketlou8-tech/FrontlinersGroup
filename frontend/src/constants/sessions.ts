import { Award, BookOpen, Users } from "lucide-react";

const sessions = [
    { label: "1-on-1 Sessions", price: "R250/hr", desc: "Fully personalised. We work through exactly what you need, at your own pace. Best for learners who are significantly behind or preparing for finals.", icon: Users, highlight: false },
    { label: "Small Group (2–4)", price: "R150/hr", desc: "Our most popular option. Shared cost, collaborative atmosphere, and enough individual attention to make real progress together.", icon: BookOpen, highlight: true },
    { label: "Weekend Bootcamps", price: "From R400", desc: "Intensive Saturday or Sunday sessions focused on a specific topic, exam prep, or past paper practice. Great before tests and exams.", icon: Award, highlight: false },
]

export default sessions;