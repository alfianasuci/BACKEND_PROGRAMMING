// import model student
const { destroy } = require("../config/database");
const db = require("../config/database");
const Student = require("../models/Student");

// Membuat Class StudentController
class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

      const data = {
        message: "Menampilkan semua students",
        data: students,
      };
      res.json(data);
  };

  async store(req, res) {
    // memanggil method create dari model student
    const students = await Student.create(req.body);

      const data = {
        message: `Menambahkan data student`,
        data: students,
      };

      res.json(data);
  };
 
  async update(req, res){
    const {id} = req.params;
    const student = await Student.find(id);
  
    if(student){
      const student = await Student.update(id,req.body);
  
      const data = {
        message: `Mengedit data student`,
        data: student,
      };
      res.status(200).json(data);
    }else{
      const data ={
        message: "Student not found",
      };
      res.status(404).json(data);
    }
  }

  async destroy(req, res){
    const{id} = req.params;
    const student = await Student.find(id);
  
    if(student){
      await Student.deleted(id);
      const data = {
        message: `Menghapus data students`,
      };
      res.status(200).json(data);
    }else{
      const data = {
        message: "Student not found",
      };
      res.status(404).json(data);
    }
  }

  async show(req, res){
    const {id} = req.params;
    const student = await Student.find(id);

    if (student){
      const data = {
        message:`Menampilkan detail student`,
        data: student,
      };
      res.status(200).json(data);
    }else{
      const data = {
        message: `Student not found`,
      };
      res.status(404).json(data);
    }
  }
}





// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;