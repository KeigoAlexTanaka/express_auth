const { Router } = require('express');
const { Tweet } = require('../models');
const { restrict } = require('../auth');

const tweetsRouter = Router();

tweetsRouter.get('/', restrict, async (req, res) => {
  const tweets = await Tweet.findAll();

  res.json({ tweets });
});

tweetsRouter.post('/', restrict, async (req, res) => {
  try {
    const { text } = req.body;
    const { user } = res.locals;
    const tweet = await Tweet.create({ text });

    const data = await tweet.setUser(user.id);

    res.json({ tweet });
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
});



module.exports = tweetsRouter
