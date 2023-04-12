const {StatusCodes}=require('http-status-codes');
class AppErrorHandler extends Error{
    constructor(
        name="Something went wrong ",
        message="Somethingn went wrong",
        explanation="Something went wrong",
        statusCode=StatusCodes.INTERNAL_SERVER_ERROR){
            super();

            this.name=name;
            this.message=message;
            this.explanation=explanation;
            this.statusCode=statusCode;

    }
    

}
module.exports=AppErrorHandler;