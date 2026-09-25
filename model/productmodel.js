const db=require("../config/db")

const addproducts=(productdata,callback)=>
{
  const sql=`insert into product(name,type,price,no_stock,discount,photo,description)values('${productdata.name}','${productdata.type}','${productdata.price}','${productdata.stock}','${productdata.discount}','${productdata.photo}','${productdata.description}')`
  db.query(sql,callback)
}

const view_product=(callback)=>
{
   const sql="select * from product"
   db.query(sql,callback)
}

const delpro=(pid,callback)=>
{
  const sql=`delete from product where id='${pid}'`
  db.query(sql,callback)
}

module.exports={
    addproducts,
    view_product,
    delpro
}