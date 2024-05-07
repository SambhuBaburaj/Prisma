import { Router } from "express";
import { Login } from "../controller/auth";
export const authRouter:Router =Router()

authRouter.get("/test",Login,(req,res)=>
{


})

