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
const customer_updatereply=(mydata,callback)=>
{
    const sql=`update help set cust_reply='${mydata.reply}' where id=${mydata.id}`
    db.query(sql,callback)
}
const admin_reply_update=(data,callback)=>
{
    const sql=`update help set admin_reply='${data.reply}' where id=${data.id}`
    db.query(sql,callback)
}
const delete_ticket=(id,callback)=>
{
    const sql=`delete from help where id=${id}`
    db.query(sql,callback)
}

module.exports={
    help_list,
    add_t,
    customer_updatereply,
    admin_reply_update,
    delete_ticket
}