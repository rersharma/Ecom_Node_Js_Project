const mysql=require("mysql2")
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"ecom"
})
db.connect((err)=>
{
      if(err)
      {
          console.log("Database Connection Failed",err)
          return
      }
})
module.exports=db