import './Test.scss';
import './UserInputText.js';
import { useState } from 'react';
import UserInputText from './UserInputText.js';

export default function Test() {
  // const [userInput, setUserInput] = useState('');
  const [updateText, setUpdateText] = useState('');
  // const [updateTop, setUpdateTop] = useState('');

  return (
    <div className="testContainer">
      <div className="row1">Meme generator</div>
      <div className="row2">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo{' '}
        </p>
      </div>
      <div className="row3">
        <UserInputText />
        <form onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="userInput">Meme URL 1 </label>
          {/* <UserInputText /> */}
          {/* <input /> */}
          {/* <label>Top text</label>
          <input
            value={updateTop}
            onChange={(event) => {
              const top = `${updateTop}`;
              const bottom = 'world';

              // https://api.memegen.link/images/doge/halo/memes_everywhere.png
              setUpdateTop(event.currentTarget.value);
            }}
          />
          <label>Bottom text </label>
          <input /> */}
        </form>
      </div>
    </div>
  );
}
