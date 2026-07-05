import type { Grade } from "@prisma/client";

export interface Student {
    id: number;
    name: string;
    grade: Grade;
    subjects: string[];
    contactDetails: {
        phone: string;
        email?: string;
    };
    createdAt: Date;
    updatedAt: Date;
}