import './App.scss';
import './ExampleComponent.js';
import { useEffect, useState } from 'react';
import ExampleComponent from './ExampleComponent.js';
import Test from './Test.js';

export default function App() {
  const [updateText, setUpdateText] = useState('');
  const [updateTop, setUpdateTop] = useState('');
  const [updateBottom, setUpdateBottom] = useState('');

  const [startImage, setStartImage] = useState('');

  const baseUrl = 'https://api.memegen.link/images/';

  const fullUrl = `${baseUrl}${updateText}/${updateTop}/${updateBottom}`;

  useEffect(() => {
    if (updateTop === '' && updateText === '' && updateBottom === '') {
      setStartImage(
        'https://api.memegen.link/images/buzz/memes/memes_everywhere.png',
      );
    } else {
      const fullUrl = `${baseUrl}${updateText}/${updateTop}/${updateBottom}`;
      setStartImage(fullUrl);
    }
  }, [updateText, updateTop, updateBottom]);

  return (
    <div className="grid-container">
      <div className="grid-item">
        {startImage && <img src={startImage} alt="Generated Meme" />}
        <ExampleComponent
          // memeUrl={memeUrl}

          baseUrl={baseUrl}
          updateText={updateText}
          updateTop={updateTop}
          updateBottom={updateBottom}
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
