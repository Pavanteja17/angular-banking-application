import { ITransaction } from "../transaction";

export interface Iuser{
    name: string;
    email: string;
    type: string;
    phoneNo: number;
    balance: number;
    transactions:Array<ITransaction>;
}