module.exports = (req, res, next) => { // req - is a request.obj, res is a response obj, next is a function that we call
    if (req.user.credits < 1) {
      return res.status(403).send({ error: 'Ooops... not enought Credits!' }); 
    }
  
    next();
  };
