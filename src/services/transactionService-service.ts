import { transcode } from "buffer";
import * as transactionServiceData from "../data/transactionService-data";
import { TransactionService, TransactionServiceParams } from "../models/transactionService";

export async function createTransactionService(data: any[], user_id: number) {
//    const {  } = data;

    const newTransactionService = transactionServiceData.createTransactionService(data, user_id);

    return {ok:true};
}

export async function getTransactionService(numero_doc: string, fecha?: string, sort?: string, page?:number, limit?: number) {
    const transactionServices = await transactionServiceData.listTransactionService(numero_doc, fecha, sort, page, limit);
    return transactionServices;
}

export async function getTransactionServiceById(id: number) {
    const transactionService = await transactionServiceData.getTransactionService(id);
    return transactionService;
}

export async function updateTransactionService(id: number, data: any[]) {
    const transactionService = await transactionServiceData.updateTransactionService(id, data);
    return transactionService;
}

export async function deleteTransactionService(id: number) {
  const transactionService = await transactionServiceData.deleteTransactionService(id);
  return transactionService;  
}