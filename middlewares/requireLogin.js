  module.exports = (req, res, next) => { // req - is a request.obj, res is a response obj, next is a function that we call
    if (!req.user) {
      return res.status(401).send({ error: 'You must log in!' }); 
    }
  
    next();
  };