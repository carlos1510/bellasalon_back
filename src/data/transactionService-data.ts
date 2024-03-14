import "dotenv/config";
import * as db from "../db";
import { TransactionService } from "../models/transactionService";

export async function createTransactionService(params: any[]): Promise<TransactionService> {
    const client = (await db.query("",
    [params[''], params[''], params['']])).rows[0];

    const transationService = (await db.query("",
    [params[''], params[''], params['']])).rows[0];

    return client.concat(transationService);
}

export async function updateTransactionService(params: any[]): Promise<TransactionService> {
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

export async function listTransactionService(params: any[], page, limit) {
    let query = "";

    return (await db.query(query)).rows;
}

export async function getTransactionService(id: number) {
    return (await db.query("", [id])).rows[0];
}