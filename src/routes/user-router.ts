import express from "express";
import { userSchema } from "../models/user";
import { ZodError } from "zod";
import { ApiError } from "../middlewares/error";
import { createUser, deleteUser, getUser, updateUser } from "../services/users-service";
import { authenticateHandler } from "../middlewares/authenticate";

const userRouter = express.Router();

userRouter.get('/:id', async (req, res, next) => {
    //const userId = req.userId as number;
    const userId = Number(req.params.id);
    const user = await getUser(userId);

    if(user){
        res.json({ok: true, message: "Usuario encontrado", data: user});
    }else{
    next(new ApiError("No autorizado", 401));
    }
});

userRouter.post("/", authenticateHandler, async (req, res) => {
    try{
      // validacion de input de usuario
      const userData = userSchema.parse(req.body);
      const newUser = await createUser(userData);
      res.status(201).json(newUser);
    }catch(error){
      if(error instanceof ZodError){
        res.status(400).send(error.errors);
      }
      res.status(500).send("Error al crear el usuario");
    }
  });

  userRouter.patch("/:id", authenticateHandler, async (req, res) => {
    try{
        const id = Number(req.params.id);
        const userData = userSchema.parse(req.body);
        const updUser = await updateUser(id, userData);
        res.status(200).json({
            ok: true,
            data: updUser,
            });
    }catch(error){
      res.status(500).send("Error al actualizar el usuario");
    }
  });

  userRouter.delete("/:id", authenticateHandler, async (req, res, next) => {
    try{
      const id = Number(req.params.id);
      await deleteUser(id);
      res.status(200).json({ ok: true });
    }catch(error){
      next(error);
    }
  });

  export default userRouter;