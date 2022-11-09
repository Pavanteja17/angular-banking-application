import { Iexpense } from "./expense.data";

export interface Ibudget{
    email:string;
    tot_budget:number;
    expense:Array<Iexpense>;
}