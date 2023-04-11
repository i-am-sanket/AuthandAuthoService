const {City}=require('../models/index');
const {Op}=require('sequelize');
class CityRepoistory{
    async getCityAll(filter){
        
        try {

            if(filter){

                const city=await City.findAll({
                    where:{
                        name:{    
                            [Op.startsWith]:filter
                        }
                    }
                }
                
                )

                return city;
            }

            
             const city=await City.findAll()
             return city;
       } catch (error) {
            throw(error);
       }
    }
    async getCity(cityid){
       try {
            const city=await City.findOne({
                where:{
                    id:cityid
                }
            })
            return city;
       } catch (error) {
            throw(error);
       }
    }
    async   createCity(Name){
        try{
            const city=await City.create({name:Name});
            return city;
        }
        catch(error){
            throw(error);
        }
    }
    async deleteCity(cityid){
       try{
            const response=await City.destroy({
                    where: {
                        id:cityid
                    }
                }
            )
            return response;
        }
        catch(error){
            throw(error);
        }
    }
    async updateCity(cityid,data){
        console.log(data);
    
        try{
            const city=await City.update({name:data.name,},{where:{
                id:cityid.id
            }});
            return city;
        }
        catch(error){
            throw(error);
        }
    
    }
}
module.exports=CityRepoistory;