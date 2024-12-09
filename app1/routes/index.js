var express = require('express');
var router = express.Router();
var path= require('path');
var customerRoute=require('./customer/customerRouter')


/* GET home page. */
router.get('/',customerRoute.findUser)

router.get('/add',customerRoute.add)

router.post('/addU',customerRoute.addUser)

router.post('/edit/:id',customerRoute.editUser)

router.post('/delete/:id',customerRoute.deleteUser)


module.exports = router;
