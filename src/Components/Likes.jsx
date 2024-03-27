import React, { useState } from 'react';
const Likes = function () {
  const [likes, setLikes] = useState(0);

  function increment() {
    setLikes((prev) => { return prev + 1 });
  }

  function decrement() {
    setLikes((prev) => { return prev - 1 });
  }

  return (
    <div>
      <h1>{likes}</h1>
      <button onClick={increment}>Like</button>
      <button onClick={decrement}>Dislike</button>
    </div>

  );
};

export default Likes;