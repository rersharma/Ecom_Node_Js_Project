const db=require("../config/db")

const check_admin=(admindata,callback)=>
{
   const sql=`select * from admin where email='${admindata.email}' and password='${admindata.password}'`
   db.query(sql,callback)
}


module.exports={
    check_admin
}