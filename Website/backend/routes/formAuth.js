const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'Harryisagoodb$oy';

// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
let success = false;
router.post('/createUser', [
  body('email', 'Enter a valid email').isEmail(),
  body('regId', 'Enter a valid name').isLength({ max: 9,min:9 }),

  body('fullname', 'Enter a valid name').isLength({ min: 3 }),
 
  body('phnNumber', 'Enter a valid name').isLength({ max: 10,min:10 }),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
  body('confirmpassword', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    // Check whether the user with this email exists already
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "Sorry a user with this email already exists" })
    }
    let user1 = await User.findOne({ phnNumber: req.body.phnNumber });
    if (user) {
      return res.status(400).json({ error: "Sorry a user with this phone number already exists" })
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    const secPass1 = await bcrypt.hash(req.body.confirmpassword,salt)
    // Create a new user
    user = await User.create({
      email: req.body.email,
      regId:req.body.regId,
      fullname: req.body.fullname,
      
      phnNumber:req.body.phnNumber,
      password: secPass,
      confirmpassword:secPass1
    });
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);


    // res.json(user)
    success = true
    res.json({ success,authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})


