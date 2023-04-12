const  ValidationError  = require('../utils/validation-error');
const {User,Role}=require('../models/index');
class UserRepository{

    async createUser(data){
       
        try {
            const user=await User.create(data);
            return user;
        } catch (error) {
                if(error.name=="SequelizeValidationError"){
                const err=new ValidationError(error);
                throw(err);
                }
                throw(error);
        }
    }
   async sigin(data){

    try {
        console.log(data);
        const user=await User.findOne({
            where:{
                Email:data.email
            }
        },{
            attributes:['Email','Password','id']
        });

        return user;
    } catch (error) {

        throw(error);
    }
   }
    async destroy(uid){
        try {
            const response=await User.destroy({
                where:{
                    id:uid
                }
            })
        } catch (error) {

            throw(error);
        }
    }
    async check(user){
        try {
            const response=await User.findOne({
                where:{
                    Email:user.Email,
                }

            });
            return response;
        } catch (error) {
            throw({error:"User not found"})
        }
    }
    async validateAdmin(userId){
        try {
            
            const user=await User.findByPk(userId);
            const role=await Role.findByPk(1);
            const response=await user.hasRole(role);
           
            return response;
        } catch (error) {
            throw{err:"Repo error"};
        }
    }
}
module.exports=UserRepository;