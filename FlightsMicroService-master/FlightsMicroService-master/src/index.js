const {PORT,SYNC_DB}=require('./config/serverConfig');
const {City,Airport, sequelize}=require('./models/index');
const setupAndStart=async ()=>{
    const app=require('express')();
    const bodyParser=require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',require('./routes/index'));

    // console.log(await city.getAirports());

    app.listen(PORT,(error)=>{
        if(SYNC_DB){
            sequelize.sync({alter:true});
        }
        console.log(`Server is running on ${PORT}`);
    })
    
}
setupAndStart();
