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
            const query = "SELECT + FROM students";
        /**
         * Melakukan query menggunkanan method query
         * Menerima 2 params: query dan callback
         */
        db.query(query ,(err, results) => {
            resolve(results);
        });
        });
    }

  static async create(data) {
    // mealkukan insert data ke dataabase
    // return new Promise((resolve, reject)=>{
        // const sql = "INSERT INTO students set?";
        // db.query(sql ,req,(err,results) => {
        //         resolve(results);
        //     });
        // });
        const id = await new Promise((resolve, reject)=>{
            const sql = "INSERT INTO student set?";
            db.query(sql, data, (err, results)=>{
                resolve(results, insertId);
            });
        });

        return new Promise((resolve, reject)=>{
            const sql = "SELECT * FROM student WHERE id = ?";
            db.query(sql, id, (err,results)=>{
                resolve(results);
            });
        });
    }

        static find(id){
            return new Promise((resolve, reject)=>{
                const sql = "SELECT FROM student WHERE id = ?";
                db.query(sql, id, (err, results)=>{
                    const [student] = results;
                    resolve(student);
                });
            });
        }

        static async update(id, data){
            await new Promise((resolve, reject)=>{
                const sql = "UPDATE students SET ? WHERE id = ?";
                db.query(sql,[data, id], (err, results)=>{
                    resolve(results);
                });
            });

            const student = await this.find(id);
            return student;
        }

        static delete(id){
            return new Promise((resolve, results)=>{
                const sql = "SELECT * FROM students  WHERE id =?";
                db.query(sql, id,(err, results)=>{
                    resolve(results);
                });
            });
        }

        static find(id){
            return new Promise((resolve, reject)=>{
                const sql = "SELECT * FROM students WHERE id = ?";
                db.query(sql, id, (err, results)=>{
                    const [student] = results;
                    resolve(student);
                });
            });
        }

}

// export class student
module.exports = Student;