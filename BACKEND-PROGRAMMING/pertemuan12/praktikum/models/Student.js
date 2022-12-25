// // TODO 1: Buat data students
// // code here
// const students = ["Tono","Cika","Riko"];

// // TODO 2: export data students
// // code here
// module.exports = students;

// import database
const db = require("../config/database");

// membuat class Model Student
class Student {
    /**
     * membuat method static all
     */
    static all(){
        // return promise sebagai solusi asynchronus
        return new Promise((resolve, reject) => {
            const sql = "SELECT + FROM students";
        /**
         * Melakukan query menggunkanan method query
         * Menerima 2 params: query dan callback
         */
        db.query(sql, (err, results) => {
            resolve(results);
        });
        });
    }

    /**
   * TODO 1: Buat fungsi untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data student yang baru diinsert.
   */
  static create() {
    return new Promise((resolve, reject)=>{
        const sql = `INSERT INTO students set?`;

        db.query(sql,req,(err,results) => {
            const sql = `SELECT * FROM students WHERE id = ${results.insertId}`;
            db.query(sql,(err,result)=>{
                resolve(result);
            });
        });
    })
  }
}

// export class student
module.exports = Student;