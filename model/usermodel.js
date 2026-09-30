
const db=require("../config/db")

const create_user=(userdata,callback)=>
{
    const sql=`insert into newuser(name,email,password,mobile,gender,state,address)values('${userdata.n}','${userdata.email}','${userdata.password}','${userdata.mobile}','${userdata.gender}','${userdata.state}','${userdata.address}')`
    db.query(sql,callback)
}

const check_user=(userdata,callback)=>
{
   const sql=`select * from newuser where email='${userdata.email}' and password='${userdata.password}'`
   db.query(sql,callback)
}

const get_data=(callback)=>
{
      const sql=`select * from newuser`
      db.query(sql,callback)
}
const myprofile=(email,callback)=>
{
   const sql=`select * from newuser where email='${email}'`
   db.query(sql,callback)
   
}


module.exports={
    create_user,
    check_user,
    get_data,
    myprofile
}