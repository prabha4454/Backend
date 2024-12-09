var path= require('path');
const User=require('../../model/item')



/* 
//get
//add user page
 */


 exports.add=async (req,res,next)=>{
    const locals={
        title:'This is my page'
    }
    res.render(path.join(__dirname,'..','..','views','add'), {title:'This is my page'
    });
};

/* 
//post
// add user function
 */
exports.addUser=async(req,res,next)=>{

    const newItem = new User({
        uname: req.body.uame,
        password: req.body.password,
    });
    try {
        await newItem.save();
        res.redirect('/');
    } catch (err) {
        res.status(500).send('Error saving item');
    }
};

    
/* 
//get
//user Details
 */

 exports.findUser=async(req,res,next)=>{
    try{
        const users= await User.find();
        res.render(path.join(__dirname,'..','..','views','index'),{
            title:'Users List',
            users
        })
    }
    catch(err){
        res.status(500).send('Error Fetching Details')
    }
 }

 /* 
 //post
 //Edit user Details

  */

 exports.editUser=async(req,res,next)=>{

    try{
        await User.findByIdAndUpdate(req.params.id,{
            uname:req.body.uname,
            password:req.body.password
        });
        res.redirect('/')
    }
    catch(err){
        res.status(500).send('Error Updating the Details');
    }
 };

/* 
//post
//Detle user
 */

 exports.deleteUser=async (req,res,next)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        res.status(500).send('Error deleting item');
    }
}