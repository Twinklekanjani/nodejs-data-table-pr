import { Router } from "express";
import studentcontroller from "../controllers/StudentControllers.js";

const StudentRouter = Router();

StudentRouter.get('/',studentcontroller.getAllStudent);
StudentRouter.post('/',studentcontroller.createStudent);
StudentRouter.delete('/:id',studentcontroller.deleteStudent);
StudentRouter.put('/:id',studentcontroller.updateStudent);
StudentRouter.patch('/:id',studentcontroller.updateOneDataOfStudent);

export default StudentRouter;