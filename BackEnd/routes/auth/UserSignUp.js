const User = require('../../models/UserSchema');
const bcrypt = require('bcrypt');

const UserSignUp = async (req,res)=>{

         let IsAlredyLogedIn = await User.findOne({email:req.body.email});

        if(!IsAlredyLogedIn){

            try {
                await User.validate(req.body)
                
            } catch (error) {
                
                return res.status(400).send({success:false,message:error.message,isAdmin:false
                });
            }

            await bcrypt.hash(req.body.password, 10).then((hash)=>{
                req.body.password = hash;
            })
            
           const NewUser = new User(req.body);

                const user = await NewUser.save()

                if(user){
                   return res.status(200).send({
                        success:true,
                        message:"done",
                        isAdmin:false,
                        userId:user._id
                    })
                }else{
                    
                    return res.status(400).send({success:false,isAdmin:false})
                }


        }else{
           return res.status(400).send({
                success:false,
                message:"User Alredy Exist",
                isAdmin:false
            })
        }


}


module.exports = UserSignUp;