import './App.scss';
import './ExampleComponent.js';
import { useState } from 'react';
import ExampleComponent from './ExampleComponent.js';
import Test from './Test.js';

export default function App() {
  const [updateText, setUpdateText] = useState('');
  const [updateTop, setUpdateTop] = useState('');
  const [updateBottom, setUpdateBottom] = useState('');

  const [startImage, setStartImage] = useState('');

  const baseUrl = 'https://api.memegen.link/images/';

  const fullUrl = `${baseUrl}${updateText}/${updateTop}/${updateBottom}`;
  console.log(fullUrl);

  return (
    <div className="grid-container">
      <div className="grid-item">
        <ExampleComponent
          baseUrl={baseUrl}
          updateText={updateText}
          updateTop={updateTop}
          updateBottom={updateBottom}
          fullUrl={fullUrl}
          startImage={startImage}
          setStartImage={setStartImage}
        />
      </div>
      <div className="grid-item grid-item2">
        <Test
          updateText={updateText}
          setUpdateText={setUpdateText}
          updateTop={updateTop}
          setUpdateTop={setUpdateTop}
          updateBottom={updateBottom}
          setUpdateBottom={setUpdateBottom}
        />
      </div>
    </div>
  );
}
