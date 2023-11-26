import { User } from "./user.interface";

export interface Fee {
    id: string,
    description: string,
    idMatter: string,
    money: number,
    images: string,
    createAt: Date,
    status: number,
    creditCard: any,
    employee: User
}
