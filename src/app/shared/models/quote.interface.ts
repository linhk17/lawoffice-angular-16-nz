import { Service } from "./service.interface";
import { TypeService } from "./type-service.interface";
import { User } from "./user.interface";

export interface Quote {
    id: string,
    customer: User,
    service?: Service,
    typeService?: TypeService,
    employee?: User,
    created: Date | string,
    updated?: Date,
    status: number,
    estimatedTotal?: number,
    timePay?: string,
    province?: string,
    district?: string,
    problem: string,
    note?: string
}
