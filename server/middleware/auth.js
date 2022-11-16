const jwt = require('jsonwebtoken');

const auth = async (req,res,next)=>{

    try {
        
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token,"shop.shack.madmanrush.spit.ac.in");
        console.log(verifyUser);
        console.log('verified')
        next();

    } catch (error) {
        res.send(401).send(error)
        
    }

}

module.exports=auth;