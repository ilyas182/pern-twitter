import PostTweet from './components/PostTweet';
import { Fragment } from 'react';
import ShowTweets from './components/ShowTweets';
// import './App.css';

function App() {
  return (
    <Fragment><h1>Twitter</h1>
      <PostTweet/>
      <ShowTweets/>

      <Routes>
        
      </Routes>
    </Fragment>
  );
}

export default App;
