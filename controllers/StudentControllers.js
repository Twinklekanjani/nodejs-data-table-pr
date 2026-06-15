import Student from "../models/StudentModel.js";

const studentcontroller = {

    async getAllStudent(req,res){
        try{

            const search = req.query.search || '';
            const sort = req.query.sort || '';
            const page = req.query.page || 1;
            const limit = req.query.limit || 5;
            const skip = (page - 1)*limit;

            let sortval = 1;

            if(sort == 'd' || sort == 'D'){
                sortval = -1;
            }

            const data = await Student.find({name : {$regex : search , $options : 'i'}})
            .sort({name : sortval})
            .skip(skip)
            .limit(limit);
            return res.status(200).json({message:"All students get data successfully", data});
        }catch(error){
            return res.status(400).json({message:error.message});
        }
    },

    async createStudent(req,res){
        try{
          const error = validationResult(req);
          if (error.array().length != 0) {
          return res.json(error.array());
      }
            const data = await Student.create(req.body);
           return res.status(201).json({message:"All students post data successfully", data}); 
        }catch(error){
            return res.status(400).json({message:error.message});
        }
    },

    async deleteStudent(req, res) {
    try {
      const { id } = req.params;
      const data = await Student.findByIdAndDelete(id);
      return res
        .status(201)
        .json({ message: "student data deleted successfully .", data });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async updateStudent(req, res) {
    try {
      const { id } = req.params;
      const data = await Student.findByIdAndUpdate(id, req.body);
      return res
        .status(200)
        .json({ message: "student data updated successfully .", data });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async updateOneDataOfStudent(req, res) {
    try {
      const { id } = req.params;
      const data = await Student.findOneAndReplace({ _id: id }, req.body);
      return res
        .status(200)
        .json({ message: "student's one data changed successfully .", data });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
   
  }
}

export default studentcontroller;