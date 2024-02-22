const express = require('express');
const {authMiddleWare} = require('../middleware');
const {Account} = require('../db');
const mongoose = require('mongoose');

const router = express.Router();
router.use(express.json());

router.get("/balance", authMiddleWare, async (req, res) => {
    console.log("req id from get: " + req.userId);
    const account = await Account.findOne({
      userId: req.userId,
    });
  
    res.json({
      balance: account.balance,
    });
  });

router.post("/transfer", authMiddleWare, async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();

    const {amount, to} = req.body;
    const account = await Account.findOne({
        userId: req.userId
    }).session(session);

    if(!account || account.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({
            msg: "Insufficient balance",
        });
    }

    const toAccount = await Account.findOneAndDelete({
        userId: to
    }).session(session);

    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            msg: "Invalid acount"
        });
    }

    await Account.updateOne({
        userId: req.userId
    },{
        $inc: {balance: -amount}
    }).session(session);

    await Account.updateOne({
        userId: to
    },{
        $inc: {balance: amount}
    }).session(session);

    await session.commitTransaction();

    res.json({
        msg: "Transfer successful"
    });
});

module.exports = router;