import { User } from "./user.interface";

export interface Task {
    id: string,
    title: string,
    employee: User,
    taskMaster: string,
    idMatter: string,
    deadline: Date,
    createdAt: Date,
    status: number
}
