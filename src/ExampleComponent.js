import { useState } from 'react';

export default function ExampleComponent(props) {
  const fullUrl = `${props.baseUrl}${props.updateText}/${props.updateTop}/${props.updateBottom}`;

  return (
    <div>
      <img data-test-id="meme-image" src={props.fullUrl} />
    </div>
  );
}
