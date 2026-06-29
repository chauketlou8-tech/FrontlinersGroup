export interface Student {
    name: string;
    grade: string;
    subjects: string[];
    contactDetails: {
        phone: string;
        email?: string;
    }
    createdAt: Date;
    updatedAt: Date;
}