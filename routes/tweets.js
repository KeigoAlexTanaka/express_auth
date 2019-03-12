const { Router } = require('express');
const { Tweet } = require('../models');
const { restrict } = require('../auth');

const tweetsRouter = Router();

tweetsRouter.get('/', restrict, async (req, res) => {
  const tweets = await Tweet.findAll();

  res.json({ tweets });
});


module.exports = tweetsRouter
