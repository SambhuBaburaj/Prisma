import { Router } from "express";
import { Login } from "../controller/auth";
const authRouter:Router =Router()

authRouter.get("/test",Login,(req,res)=>
{


})