const {CityServices}=require('../services/index');
const cityservice=new CityServices();

class CityController{
    async getAll(req,res){
        try {
            const filter=req.query;
            

            if(filter){

                const cities=await cityservice.getAll(filter);
                return res.status(200).json({
                    City:cities
                });
            }
            const city=await cityservice.getAll();
            return res.status(200).json({
                City:city
            });
            
          } catch (error) {
                return res.status(404).json({
                    err:{error}
                })
          }
    }
    async get(req,res){
      try {
        const id=req.params;
        const city=await cityservice.getCity(id);
        return res.status(200).json({
            City:city
        });
        
      } catch (error) {
            return res.status(404).json({
                err:error
            })
      }
    }
    async create(req,res){
        const data=req.body;
        console.log(req.body);
        try {
            const city=await cityservice.createCity(data);
            return res.status(201).send({
                data:data.name,
                success:true,
                message:"City created successfully",
                err:{}
            })
        } catch (error) {
            console.log(error);
            return res.status(401).send({
                data:{name:data.name},
                success:false,
                message:"Error",
                err:error
            })
            
        }
        
    }
    async destroy(req,res){
        const id=req.params.id;
        console.log(id);
        try {
            const response=await cityservice.deleteCity(id);
            return res.status(201).send({
                success:response,
                message:"Destroyed",
                err:{}
            });
            
        } catch (error) {
            console.log(error);
            return res.status(201).send({
                success:false,
                message:"Destruction not done",
                err:error
            });
        }
    }
    async update(req,res){
        const data=req.body;
        const cityid=req.params;
        console.log(data,cityid);
        try {
            const upd=await cityservice.updateCity(cityid,data);
            return res.status(202).json({
                success:true,
                rowsUpdated:upd,
                updatedName:data.Name,
                err:{}
            });
        } catch (error) {
            return res.status(202).json({
                success:false,
                updatedName:{},
                err:{error}
            })
        }
    }
}
module.exports=CityController;