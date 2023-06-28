module.exports= reqFilter=(req,res,next)=>{
    if(!req.query.id)
    {
        res.send("Please Provide subscription Id");
    }
    else if(req.query.id<18)
    {
        res.send("Sorry You have Not any Premium recharge")
    }
    else
    {
        next();
    }
}