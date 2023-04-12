const AppErrorHandler=require('./error-handler');
const {StatusCodes}=require('http-status-codes');
class ValidationError extends AppErrorHandler{


    constructor(error){
       let explanation=[];
       let name=error.name;
       error.errors.forEach(element => {
            explanation.push(element);
       });
    
    super(name,
        "Not validated ",
        explanation,
        StatusCodes.BAD_REQUEST);
    }
}
module.exports=ValidationError;