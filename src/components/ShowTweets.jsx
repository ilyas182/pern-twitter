import { Fragment, useEffect, useState } from "react";

export default function ShowTweets () {
    const [tweets, setTweets] = useState([]);
    
    const deleteTweet = async(id) => {
      try {
        const response = await fetch(`http://localhost:3000/api/home/tweets/${id}`,{
          method: 'DELETE'
        });
        console.log(response);
        setTweets(tweets.filter(tweet => tweet.tweet_id !== id));
        console.log(tweets);
      } catch (error) {
        console.error("Error deleting tweet:", error.message);
      }
    }

    useEffect(() => {
        async function fetchAllTweets() {
          try {
            const response = await fetch("http://localhost:3000/api/home/tweets");
            const jsonData = await response.json();
            setTweets(jsonData.reverse());
          } catch (error) {
            console.error("Error fetching tweets:", error.message);
          }
        }
    
        fetchAllTweets();
      }, []);

    return (
        <Fragment>
            <h1>Tweets</h1>
            {tweets.map(tweet =>
              <div key={tweet.tweet_id}> 
                <p>{tweet.content}</p>
                <button onClick={() => deleteTweet(tweet.tweet_id)}>delete</button>
              </div>
            )}
        </Fragment>
    )
}