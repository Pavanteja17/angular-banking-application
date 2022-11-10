import { ITransaction } from "../transaction";

export interface Iuser{
    name: string;
    email: string;
    type: string;
    phoneNo: number;
    balance: number;
    accno: number,
    transactions:Array<ITransaction>;
}