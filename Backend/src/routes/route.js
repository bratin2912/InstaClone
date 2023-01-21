const router=require("express").Router();
const path=require("path")
const User=require("../model/userModel");

router.post('/user',(req,res)=>{
    const {author,location,description}=req.body;
    const {file_name}=req.files;
    file_name.mv("../uploads"+file_name.name,async(err)=>{
        if(err){
            return res.status(502).send({
                status:"Failed",
                message:"Failed to upload image"
            })
        }
        try{
            const data=User.create({
                ...{author,location,description},
                file_name:file_name

            })
            return res.status(201).send({
                status:"Success",
                message:"Data uploaded successfully"
            });
        }catch(err){
            return res.status(502).send({
                status:'Failed',
                message:err.message
            });
        }
    })
});

router.get("/user",async(req,res)=>{
    try{
        const data=User.find();
        res.status(200).send({
            result:data
        })
    }catch(e){
        res.status(502).send({
            status:'Failed',
            message:e.message
        })
    }
})

router.get("/user/image/:fileName",async(req,res)=>{
    res.sendFile(path.join(__dirname,`../uploads/${req.params.fileName}`));
})
module.exports=router;