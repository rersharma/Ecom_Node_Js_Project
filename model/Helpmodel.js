const db=require("../config/db")

const help_list=(callback)=>{
    const sql=`select * from help`
    db.query(sql,callback)
}
const add_t=(mydata,callback)=>
{
     const sql=`insert into help(email,subject,query)
         values('${mydata.useremail}','${mydata.subject}','${mydata.query}')`
    db.query(sql,callback)
}

module.exports={
    help_list,
    add_t
}