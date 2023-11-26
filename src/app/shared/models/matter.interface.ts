import { Fee } from "./fee.interface";
import { Service } from "./service.interface";
import { Task } from "./task.interface";
import { TypeAppointment } from "./time-appointment.interface";
import { TypeService } from "./type-service.interface";
import { User } from "./user.interface";

export interface Matter {
    id: string,
    title: string,
    typeAppoint: TypeAppointment,
    commissionDiscount: number,
    typeService: TypeService,
    service: Service,
    employee: User,
    customer: User,
    access: any[],
    tasks: Task[],
    documents: any[],
    fees: Fee[],
    contacts: any[],
    status: number,
    total: number,
    statusPayment: number,
    createdAt: Date,
    updatedAt: Date, 
    historyUpdated: any[]
}
