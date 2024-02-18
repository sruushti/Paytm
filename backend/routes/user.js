const express = require('express');

const router = express.Router();
const zod = require('zod');
const {User, Account} = require('../db');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');
const authMiddleWare = require('../middleware');

const signupBody = zod.object ({
    username : zod.string().email(),
    password : zod.string(),
    firstName : zod.string(),
    lastName : zod.string()
})

router.post('signup', async (req, res) => {
    const {success} = signupBody.safeParse(signupBody);

    if(!success){
        return res.status(411).json({
            message : "Email already taken / Incorrect inputs"
        })
    }

    const existingUser = User.findOne({
        username : req.body.username
    })

    if(existingUser) {
        return res.status(411).json({
            message : "Email already taken / Incorrect inputs"
        })
    }

    try {
        const user = await User.create ({
            username : req.body.username,
            password : req.body.password,
            firstName : req.body.firstName,
            lastName : req.body.lastName,
        })
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
            return res.status(500).json({
                msg: "Server error",
            });
        }
    }

})

const signinBody = zod.object({
    username: zod.string().email(),
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
        username: req.body.username,
        password: req.body.password
    });

    if(user){
        const token = jwt.sign({
            userId : user._id
        },JWT_SECRET)

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
    const filer = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                $regex: filer,
            }
        },{
            lastName: {
                $regex: filter,
            }
        }]
    });

    res.json({
        users: users.map((user)=> ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id,
        })),
    });
});

module.exports = router;