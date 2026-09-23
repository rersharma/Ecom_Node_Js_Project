const db=require("../config/db")

const addproducts=(productdata,callback)=>
{
  const sql=``
  db.query(sql,callback)
}

module.exports={
    addproducts
}