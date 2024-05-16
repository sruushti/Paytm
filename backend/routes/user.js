const express = require('express');

const router = express.Router();
const zod = require('zod');
const {User, Account} = require('../db');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');
const {authMiddleWare} = require('../middleware');
router.use(express.json());

const signupBody = zod.object ({
    userName : zod.string().email(),
    firstName : zod.string(),
    lastName : zod.string(),
    password : zod.string(),
});

router.post('/signup', async (req, res) => {
    console.log(req.body);
    const {success} = signupBody.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            message : "Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        userName : req.body.userName
    })

    if(existingUser) {
        return res.status(411).json({
            message : "Email already taken / Incorrect inputs"
        })
    }

    try {
        console.log("Request Body: ",req.body);
        //console.log("User bfr: ",user);
        console.log("User Data:", {
            userName: req.body.userName,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        });

        const user = await User.create ({
            userName : req.body.userName,
            password : req.body.password,
            firstName : req.body.firstName,
            lastName : req.body.lastName,
        });
        console.log("User: ",user);
        const userId = user._id;
        
        await Account.create({
            userId,
            balance: 1 + Math.random() * 10000
        })

        //creates a token for authorization
        const token = jwt.sign({
            userId
        }, JWT_SECRET);

        res.json({
            message: "User created successfully",
            token : token
        })
    }catch(e){
        if(e.errors && e.errors.password){
            return res.status(400).json({
                msg: "Password validation failed",
                errors: e.errors.password.message,
            });
        }else{
            console.error(e);
            return res.status(500).json({
                msg: "Server error",
            });
        }
    }

})

const signinBody = zod.object({
    userName: zod.string().email(),
    password: zod.string()
})

router.post('/signin', async (req, res) => {
    const {success} = signinBody.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const user = await User.findOne({
        userName: req.body.userName,
        password: req.body.password
    });

    if(user){
        let token = jwt.sign({
            userId : user._id
        },JWT_SECRET)

        const decoded = jwt.verify(token, JWT_SECRET);
        const userId = decoded.userId;
        res.json({
            token: token
        })

        return;
    } else{
        res.status(411).json({
            message: "Error while logging in"
        })
    }
})

const updatedBody = zod.object({
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
    password: zod.string().optional()
});

router.put('/', authMiddleWare, async (req, res) => {
    const {success} = updatedBody.safeParse(req.body);

    if(!success){
        res.status(411).json({
            message: "Error while updating the credentials"
        })
    }

    await User.updateOne(req.body, {_id: req.userId});
    res.json({
        msg: "User updated successfully",
        //userId: userId,
    });
});

router.get('/bulk', async(req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                $regex: filter,
            }
        },{
            lastName: {
                $regex: filter,
            }
        }]
    });

    res.json({
        users: users.map((user)=> ({
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id,
        })),
    });
});

module.exports = router;