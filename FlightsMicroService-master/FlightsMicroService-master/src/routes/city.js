const router=require('express').Router();
const {CityController}=require('../controller/index');
const controller=new CityController();
router.get('/find',controller.getAll);
router.get('/find/:id',controller.get);
router.post('/create',controller.create);
router.delete('/:id',controller.destroy);
router.patch('/update/:id',controller.update);
module.exports=router;