const pool = require('../config/db')

async function postTweet(req, res) {
    try {
        const {content} = req.body;
        const newTweet = await pool.query("INSERT INTO tweets (content) VALUES($1) RETURNING *", 
        [content]
        );

        res.json(newTweet.rows[0]);
    
    } catch (error) {
        console.error(error.message)
    }
  }
  
  async function getTweet(req,res) {
    try {
        const allTweets = await pool.query("SELECT * FROM tweets");
        res.json(allTweets.rows);
    } catch (error) {
        console.error(error.message);
    }
  }

  async function getTweetbyID(req, res) {
    try {
        const { id } = req.params;
        const tweet = await pool.query("SELECT * FROM tweets WHERE tweet_id = $1", [id]);
        res.json(tweet.rows);
    } catch (error) {
        console.error(error.message);
    }
  }

  async function deleteTweet(req, res) {
    try {
        const { id } = req.params;
        const tweet = await pool.query('DELETE FROM tweets WHERE tweet_id = $1', [id]);
        res.json("Tweet was deleted");
    } catch (error) {
        console.error(error.message);
    }
  }

  module.exports = { postTweet, getTweet, getTweetbyID, deleteTweet };