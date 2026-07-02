export type Admin = {
    id: number;
    name: string;
    email: string;
    hashed_password: string;
    role: string;
} | null