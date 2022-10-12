const router = require('express').Router();
const {signUp,verifyOtp} = require('../Controllers/userControllers');

// router.route('/signup')
     // .post(signUp);
router.post("/signup",signUp);
router.route('/signup/verify') 
     .post(verifyOtp);
     
     
module.exports=router;

