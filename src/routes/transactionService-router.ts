import express from "express";
import { ZodError } from "zod";
import { ApiError } from "../middlewares/error";
import { authenticateHandler } from "../middlewares/authenticate";
import { transactionServiceSchema } from "../models/transactionService";
import { createTransactionService, getTransactionServiceById, getTransactionService, updateTransactionService, deleteTransactionService} from "../services/transactionService-service";

const transactionRouter = express.Router();

transactionRouter.get('/:id', authenticateHandler, async (req, res, next) => {
    const id = Number(req.params.id);
    const transaction = await getTransactionServiceById(id);

    if(transaction){
        res.json({ok: true, message: "Trasaccion encontrado", data: transaction});
    }else{
        res.json({ok: false, message: "Trasaccion No encontrado", data: transaction});
    }
});

transactionRouter.post("/", authenticateHandler, async (req, res, next) => { 
    try{
        // validacion de input
        const userId = req.userId as number;
        const transactionData = req.body;
        const newTransaction = await createTransactionService(transactionData, userId);
        res.status(201).json(newTransaction);
      }catch(error){
        if(error instanceof ZodError){
          res.status(400).send(error.errors);
        }
        res.status(500).send("Error al crear la transaccion");
      }
 });