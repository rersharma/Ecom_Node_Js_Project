
const db=require("../config/db")

const create_user=(userdata,callback)=>
{
    const sql=`insert into newuser(name,email,password,mobile,gender,state,address)values('${userdata.n}','${userdata.email}','${userdata.password}','${userdata.mobile}','${userdata.gender}','${userdata.state}','${userdata.address}')`
    db.query(sql,callback)
}


module.exports={
    create_user
}