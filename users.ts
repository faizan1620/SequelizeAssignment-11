

const express=require('express');
const router=express.Router();
const db=require("./database");

const users=db.umodel;
const customer=db.cmodel;
const role=db.rmodel;



router.get('/:id',async (req:any,res:any)=>{ 
  const { id }=req.params;
  console.log(`Hello from get ${id}`)
  users.findAll({
      where:[{
          uid:id
      }],
      include:[{
          model:role
          
      },
      {
          model:customer
      }
      ]
    })
    .then(users =>{
        res.json(users)
  }) 
  .catch(err=>{
      res.status(500).send("Error in getting data");
  })   
});

 router.get('/', (req:any,res:any)=>{ 
 
    users.findAll({
     include:[{
        model:role
        
     },
        {
        model:customer
        }
     ]
    })
    .then(users =>{
        res.json(users)
    }) 
    .catch(err=>{
        res.status(500).send("Error in getting data");
    })
 
});





router.post('/',async (req:any,res:any)=>{
   
    const user=req.body;
    console.log("In post");
    const userdata={
        uid:user.uid,
        first_name:user.fname,
        middle_name:user.mname,
        last_name:user.lname,
        email:user.email,
        address:user.address, 
        phone_number:user.phonenumber
    }

    const cdata={
        cid:user.uid,
        cname:user.cname,
        website:user.website,
        caddress:user.address
    }

    const rdata={
        rid:user.uid,
        rname:user.rname,
        key:user.key,
        description:user.description
    }

    users.create(userdata,users.createData)
        .then(result=>{
            
            customer.create(cdata,customer.createData)
                .then(result=>{
                    role.create(rdata,role.createData)
                    .then(result=>{
                        res.status(200).send("Data inserted successfully !");
                    })
            })
        })

        .catch(err=>{
            res.status(500).send("some error occured ! Cannot insert data !");
        })
    
});

router.delete('/:id',async (req:any,res:any)=>{
    const { id } = req.params;
    users.destroy({where:{uid:id}})
        .then(()=>{
            res.status(200).send("Deleted");
        })
       .catch(err=>{
           res.send(err);
       })
        
    });


router.patch('/:id',async (req:any,res:any)=>{
    const { id } = req.params;
    const user = req.body;
    console.log(id);
    
    users.update({ 
        first_name:user.fname,
        middle_name:user.mname,
        last_name:user.lname,
        email:user.email,
        address:user.address,
        phone_number:user.phonenumber,
        
    },{
        where:{ uid:id}
    }
   )
            .then(result=>{
                customer.update({ 
                    cname:user.cname,
                    website:user.website,
                    caddress:user.caddress
                   
                },{
                    where:{ cid:id}
                })
               
            }   
            ) .then(result=>{
            role.update({ 
                rname:user.rname,
                key:user.key,
                description:user.description
               
            },{
                where:{ rid:id}
            })
        }   
    )
    .then(result=>{
        res.status(200).send("Updated Successfully");
    })
       
    .catch(err=>{
        console.log(id,user.mname,user.lastname,user.email,user.phone_number);
        res.status(500).send("some error occured ! Cannot insert data !");
    })
    
    
}); 


export default router;