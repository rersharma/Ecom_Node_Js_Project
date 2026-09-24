
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
            if(!req.file)
            {
                return res.render('Add_Product',{title:'Add Product',message:'Please select a product photo'})
            }

            const productdata={
                  name:req.body.pname,
                  type:req.body.ptype,
                  price:req.body.pprice,
                  stock:req.body.pstock,
                  discount:req.body.pdiscount,
                  photo:req.file.filename,
                  description:req.body.pdescription
            }
             productmodel.addproducts(productdata,(err)=>
            {
                 if(err)
                 {
                     console.error(err)
                     return res.status(500).render('Add_Product',{title:'Add Product',message:'Failed to add product. Please try again.'})
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