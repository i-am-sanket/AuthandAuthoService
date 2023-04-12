const app=require('express')();
const {PORT,SYNC}=require('./config/serverConfig');
const {v1}=require('./routes/index');
const bodyparser=require('body-parser');
const db=require('./models/index')

async function startServer(){
    app.use(bodyparser.urlencoded({extended:false}));
    app.use(bodyparser.json());
    app.use('/api/v1',v1);
    
    app.listen(PORT,(error)=>{
        // if(SYNC){
        //     db.sequelize.sync({alter:true});
        // }
        if(error){
            throw(error);
        }
        console.log(`Server is running on port No:${[PORT]}`);
    })


}   
startServer();