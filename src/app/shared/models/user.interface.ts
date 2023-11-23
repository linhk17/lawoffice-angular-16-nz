import { Part, Position } from "./position.interface";

export interface User {
    id?: String;
    fullName?: String;
    email?: String;
    dateOfBirth?: Date | String;
    address?: String;
    active?: Boolean;
    phone?: String;
    position?: Position | string;
    part?: Part | string;
    avatar?: String;
}

export interface Account {
    phoneNumber?: String;
    password?: String;
    role?: Number | null;
}
