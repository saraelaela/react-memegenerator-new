import { useEffect } from 'react';

export default function ExampleComponent(props) {
  useEffect(() => {
    if (
      props.updateTop === '' &&
      props.updateText === '' &&
      props.updateBottom === ''
    ) {
      props.setStartImage(
        'https://api.memegen.link/images/buzz/memes/memes_everywhere.png',
      );
    } else {
      props.setStartImage(props.fullUrl);
    }
  }, [props.updateText, props.updateTop, props.updateBottom, props.fullUrl]);

  return (
    <div>
      {/* {props.startImage && <img src={props.startImage} alt="Generated Meme" />} */}
      {<img src={props.startImage} alt="Generated Meme" />}
      {/* <img data-testid="meme-image" src={props.fullUrl} alt="meme" /> */}
    </div>
  );
}
