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

const updatepro=(productdata,callback)=>
{
     const sql=`update  product set name='${productdata.name}',type='${productdata.type}',price='${productdata.price}',no_stock='${productdata.stock}',discount='${productdata.discount}',photo='${productdata.photo}',description='${productdata.description}' where id='${productdata.id}'`
     db.query(sql,callback)
}
const updatepro2=(productdata,callback)=>
{
      const sql=`update product set name='${productdata.name}',type='${productdata.type}',price='${productdata.price}',no_stock='${productdata.stock}',discount='${productdata.discount}',description='${productdata.description}' where id='${productdata.id}'`
     db.query(sql,callback)
}
const product_info=(pid,callback)=>
{
   const sql=`select * from product where id='${pid}'`
   db.query(sql,callback)
}
const take_order=(orderdata,callback)=>
{
    const sql=`insert into myorder(customer_email,pid,pname,ptype,buy_qnty,product_price,total_price,product_photo)values('${orderdata.customer_email}','${orderdata.pid}','${orderdata.pname}','${orderdata.ptype}','${orderdata.qnty}','${orderdata.pprice}','${orderdata.total_price}','${orderdata.pphoto}')`

    db.query(sql,callback)
}

const cust_order=(email,callback)=>
{
    const sql=`select * from myorder where customer_email='${email}'`
    db.query(sql,callback)
}


module.exports={
    addproducts,
    view_product,
    delpro,
    updatepro,
    updatepro2,
    product_info,
    take_order,
    cust_order
}