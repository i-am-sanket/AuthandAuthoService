const {UserRepository}=require('../repository/index');
const {Key}=require('../config/serverConfig');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
class UserService{
    constructor(){
        this.userService=new UserRepository();
    }
    async createUsers(data){
        try {
            const user=await this.userService.createUser(data);
            return user;
        } catch (error) {
            if(error=="SequelizeValidationError"){
                throw(error);
            }
            throw(error);
        }
    }
    async destroyUser(id){
        try {
            const response=await this.userService.destroy(id);
            return response;
        } catch (error) {
            throw(error);
        }
    }
    async signIn(data){
        try {

            const user=await this.userService.sigin(data);
            const verifyPassword= this.checkPassword(data.password,user.Password);

            if(!verifyPassword){
                throw {error:"Email and password doesnt matched"}
            }
            let temp={
                Email:user.Email,
                id:user.id
            }
            const token=this.createToken(temp);
            return token;
            
        } catch (error) {
            throw{err:"Service layer error"};
        }

    }
    async isAuthenticated(data){
        try{
            const user=this.verifyToken(data.token);
            console.log(user);
            const response=await this.userService.check(user);
            return response;
        }
        catch(error){
            throw(error);
        }
    }
    async isAdmin(userId){
        try {
            const response=await this.userService.validateAdmin(userId);
            return response;
        } catch (error) {
            throw(error);
        }
    }
     createToken(user){
        try{

            const token= jwt.sign(user,Key,{
                expiresIn:'1h'
            })
            return token;
        }
        catch(error){
            throw{error:"Token not generated"};
        }
    }
     verifyToken(token){
        try{
           
            const response= jwt.verify(token,Key);
            return response;
        }
        catch(error){
            throw{error:"Token not verified"};
        }
    }
    checkPassword(plainPassword,encryptedPassword){
        try {

            const response=bcrypt.compareSync(plainPassword,encryptedPassword);

            return response;
        } catch (error) {

            throw{err:"Password doesnt match"};
        }
    }
    
}
module.exports=UserService;