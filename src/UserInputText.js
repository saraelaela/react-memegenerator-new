import { useState } from 'react';

export default function UserInputText() {
  const text = `${userInput}`;
  const [userInput, setUserInput] = useState('');

  return (
    <input
      value={userInput}
      onChange={(event) => setUserInput(event.currentTarget.value)}
    />
  );
}
