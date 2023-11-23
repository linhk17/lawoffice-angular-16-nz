import { Quote } from "./quote.interface";
import { User } from "./user.interface";

export interface TimeAppointment {
    id: string;
    title: string;
    duration: {
        start: Date | string;
        end: Date | string
    },
    description?: string;
    note?: string;
    customer?: User;
    employee?: User;
    created_by?: User;
    quote?: Quote;
    typeTime?: string;
}

export interface TypeAppointment{
    id: string;
    name: string;
}

export interface TimePay{
    id: string;
    name: string;
}