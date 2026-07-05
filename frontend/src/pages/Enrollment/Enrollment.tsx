import { useState } from "react";
import Header from "../../components/enrollment/Header.tsx";
import EnrollmentForm from "../../components/enrollment/EnrollmentForm.tsx";

export default function Enrollment() {
    const [step, setStep] = useState<string>("form");

    return (
        <div>
            <Header step={step} />
            <EnrollmentForm setStep={setStep} />
        </div>
    );
}