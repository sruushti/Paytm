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
  
    if (!account) {
        return res.status(404).json({ msg: 'Account not found' });
    }

    res.json({
      balance: account.balance,
    });
});

router.post("/transfer", authMiddleWare, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    const { to, amount } = req.body;
  
    const account = await Account.findOne({
      userId: req.userId,
    }).session(session);
  
    if (!account || account.balance < amount) {
      await session.abortTransaction();
      return res.status(400).json({
        message: "Insufficient balance",
      });
    }
  
    const toAccount = await Account.findOne({
      userId: to,
    }).session(session);
  
    if (!toAccount) {
      await session.abortTransaction();
      return res.status(400).json({
        message: "Invalid account",
      });
    }

    const senderId = await req.userId;
  
    await Account.updateOne(
      {
        userId: req.userId,
      },
      {
        $inc: {
          balance: -amount,
        },
      }
    ).session(session);
  
    await Account.updateOne(
      {
        userId: toAccount.userId,
      },
      {
        $inc: {
          balance: amount,
        },
      }
    ).session(session);
    console.log("Balance updated: ", account.balance);
    await session.commitTransaction();
    res.json({
      message: "Transfer successful",
    });
  });

module.exports = router;