'use client';

import axios from 'axios';

const Chat = () => {
  const handleClick = async () => {
    try {
      const { data } = await axios.get('/api/hello');
      console.log(data);
    } catch (e) {
      console.log("err",e);
    }
  };
  return (
    <>
      <div className="container">
        <button onClick={handleClick}>test</button>
      </div>
    </>
  );
};

export default Chat;
