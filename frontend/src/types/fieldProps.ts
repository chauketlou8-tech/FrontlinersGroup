import type { ChangeEvent } from "react";

export interface FieldProps {
    label: string;
    id: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    as?: "input" | "textarea" | "select";
    options?: string[];
    value?: string;
    onChange?: (e: ChangeEvent<never>) => void;
    error?: string;
    rows?: number;
    className?: string;
}