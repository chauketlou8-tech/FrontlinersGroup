export type Admin = {
    id: number;
    email: string;
    hashed_password: string;
    role: string;
} | null