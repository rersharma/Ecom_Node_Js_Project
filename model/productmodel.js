const db=require("../config/db")

const addproducts=(productdata,callback)=>
{
  const sql=`insert into product(name,type,price,no_stock,discount,photo,description)values('${productdata.name}','${productdata.type}','${productdata.price}','${productdata.stock}','${productdata.discount}','${productdata.photo}','${productdata.description}')`
  db.query(sql,callback)
}

module.exports={
    addproducts
}