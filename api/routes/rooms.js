import express from "express";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";
import { createRooms, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../controllers/room.js";

const router = express.Router();

//CREATE
router.post("/:hotelid",verifyAdmin,verifyToken, createRooms);
//UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id",verifyAdmin, updateRoom);
//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//GET
router.get("/:id", getRoom);
//GET ALL
router.get("/", getRooms);
    
export default router