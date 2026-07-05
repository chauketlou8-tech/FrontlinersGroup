// Types
export interface EnrollmentData {
    // Learner Information
    firstName: string;
    lastName: string;
    grade: string;
    school: string;

    // Subject & Session
    subject: string;
    sessionType: string;
    currentMark: string;
    sessionDay: string;

    // Contact Details
    parentName: string;
    phone: string;
    email: string;
    referral: string;
    notes: string;
}

export interface EnrollmentContextType {
    data: EnrollmentData;
    updateData: (field: keyof EnrollmentData, value: string) => void;
    resetData: () => void;
    isFormValid: () => boolean;
}