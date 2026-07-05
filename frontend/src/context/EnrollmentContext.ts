import { createContext } from "react";
import type { EnrollmentContextType } from "../types/enrollment.types.ts";

export const EnrollmentContext = createContext<EnrollmentContextType | undefined>(undefined);