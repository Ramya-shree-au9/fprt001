import express from "express";
import {
    addTodoList,deleteList,updateList,updateCards,deleteCards,addTodoCards
 } from "../controllers/trello.js";

const router = express.Router();

router.post("/addTodoList", addTodoList);
router.delete("/removeList/:id", deleteList);
router.patch("/removeCard/:id", deleteCards);
router.patch("/updateList", updateList);
router.patch("/updateCards", updateCards);
router.patch("/addTodoCard/:id", addTodoCards);

export default router;
