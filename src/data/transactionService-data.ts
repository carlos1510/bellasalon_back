import "dotenv/config";
import * as db from "../db";
import { TransactionService } from "../models/transactionService";

export async function createTransactionService(params: any[], user_id: number): Promise<TransactionService> {
    const client = (await db.query("",
    [params[''], params[''], params['']])).rows[0];

    const transationService = (await db.query("",
    [params[''], params[''], params['']])).rows[0];

    return client.concat(transationService);
}

export async function updateTransactionService(id: number, params: any[]): Promise<TransactionService> {
    const client = (await db.query("",
    [params[''], params[''], params['']])).rows[0];

    const transationService = (await db.query("",
    [params[''], params[''], params['']])).rows[0];

    return client.concat(transationService);
}

export async function deleteTransactionService(id: number) {
    await db.query("", [id]);
    return {ok: true};
}

export async function listTransactionService(numero_doc: string, fecha?: string, sort?:string, page?:number, limit?: number) {
    let query = "";

    return (await db.query(query)).rows;
}

export async function getTransactionService(id: number) {
    return (await db.query("", [id])).rows[0];
}