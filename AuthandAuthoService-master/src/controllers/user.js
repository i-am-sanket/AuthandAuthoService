const {UserService}=require('../services/index');
const user=new UserService();
const {StatusCodes}=require('http-status-codes');
class UserController{
   
    async  create(req,res){
        try {
           
            const User=await user.createUsers(req.body);

            return res.status(StatusCodes.CREATED).json({
                success:true,
                error:{}
            });


        } catch (error) {
        

            return res.status(error.StatusCode).json({
                success:false,
                err:{error}
            })
        }
    }
    async logIn(req,res){
        try {
            const data=req.headers;

            const response=await user.signIn(data);
            return res.status(201).json({
                success:true,
                token:response,
                error:{}
            });

        } catch (error) {
            return res.status(StatusCodes.OK).json({
                success:false,
                err:error
            });
        }
    }
    async destroy(req,res){
        try {

            const response=await user.destroyUser(req.query.id);
             
            return res.status(StatusCodes.OK).json({
                success:true,
                error:{}
            })
        } catch (error) {
            return res.status(401).json({
                success:false,
                err:{error}
            })
        }
    }
    async validate(req,res){
        try {
            const token=req.headers;
            const response=await user.isAuthenticated(token);
            return res.status(StatusCodes.OK).json({
                success:'true',
                data:response,
                error:{}
            })
        } catch (error) {
            return res.status(401).json({
                success:"false",
                err:error
            })
        }
    }
    async authorize(req,res){
        try {
            const data=req.body.id;
            const response=await user.isAdmin(data);
            return res.status(StatusCodes.OK).json({
                success:true,
                role:response,
                err:{}
            })
        } catch (error) {
            return res.status(401).json({
                success:false,
                err:error
            })
        }
    }
}
module.exports=UserController;