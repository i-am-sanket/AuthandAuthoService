const {Airplane}=require('../models/index');
class AirplaneRepository{

    async getSeats(key){
        try {
            const plane=await Airplane.findByPk(key);
            return plane.totalSeats;
        } catch (error) {
            throw (error);
        }
    }
}