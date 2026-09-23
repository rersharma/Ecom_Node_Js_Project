
const productmodel=require('../model/productmodel')

const Addproduct=(req,res)=>
{
      if(!req.session.adminemail)
      {
         res.render('Admin',{title:'Admin-Cpanel',message:'Login First.....'})
      }
      else 
      {
          if(req.method=='GET')
          {
              res.render('Add_Product',{title:'Add Product'})
          }
          else 
          {
            productdata={

            }
             productmodel.addproducts(productdata,(err)=>
            {
                 if(err)
                 {
                     res.render(err)
                 }
                 else
                 {
                     res.render('Add_Product',{title:'Add Product',message:'Product Added Successfully'})
                 }
            })
          }
      }
}

module.exports={
    Addproduct
}