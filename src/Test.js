import './Test.scss';
import './UserInputText.js';
import { useState } from 'react';
import UserInputText from './UserInputText.js';

export default function Test(props) {
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
        <form
          name="myForm"
          onSubmit={(event) => event.preventDefault()}
          id="myFormId"
        >
          <label htmlFor="userInput" name="myLabel">
            Meme URL 1{' '}
          </label>
          <input
            value={props.updateText}
            onChange={(event) => props.setUpdateText(event.currentTarget.value)}
          />

          <input
            value={props.updateTop}
            onChange={(event) => props.setUpdateTop(event.currentTarget.value)}
          />

          <input
            value={props.updateBottom}
            onChange={(event) =>
              props.setUpdateBottom(event.currentTarget.value)
            }
          />
        </form>
      </div>
    </div>
  );
}
