const User = require('../../models/UserSchema');
const bcrypt = require('bcrypt');


const UserLogin = async (req,res)=>{

         let ExistingUser = await User.findOne({email:req.body.email});

         
         
         if(ExistingUser){
            
            const match = await bcrypt.compare(req.body.password, ExistingUser.password);
            if(match){

                if(ExistingUser.email == "jay123@gmail.com"){
                   return res.status(200).send({
                        success:true,
                        userId:ExistingUser._id,
                        isAdmin:true
                    })

                }
                res.status(200).send({
                    success:true,
                    userId:ExistingUser._id,
                    isAdmin:false
                })


                
            }else{
                res.status(400).send({
                    success:false,
                    message:"Password is wrong",
                    isAdmin:false

                })
            }

            
        }else{

            res.status(400).send({
                success:false,
                message:"Email does not  exist",
                isAdmin:false

        })
        }


}


module.exports = UserLogin;