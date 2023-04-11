const {CityRepositroy}=require('../repository/index');
class CityServices{
    constructor(){
        this.cityrepository=new CityRepositroy();
    }
    async getAll({filter}){

        try {
            if(filter){

                const cities=await this.cityrepository.getCityAll(filter);
                return cities;
            }
            const city=await this.cityrepository.getCityAll();
             
            return city;
        } catch (error) {
                throw(error);
        }
    }
    async getCity({id}){
        try {
            const city=await this.cityrepository.getCity(id);
             
            return city;
        } catch (error) {
            throw(error);   
        }
    }
    async createCity({name}){
        try {
            const city=  await this.cityrepository.createCity(name);
            return city;
        } catch (error) {
            throw(error);
        }
    }
    async deleteCity(cityid){
        try {
            const response= await  this.cityrepository.deleteCity(cityid);
            return response
        } catch (error) {
            throw (error);            
        }
    }
    async updateCity(id,data){

        try {
          const city=await this.cityrepository.updateCity(id,data);
          return city;
        } catch (error) {
            throw(error);
        }
    }
}
module.exports=CityServices;