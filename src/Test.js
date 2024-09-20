import './Test.scss';
import './UserInputText.js';

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
          <label htmlFor="MemeTemplate" name="myLabel">
            Meme template{' '}
          </label>
          <input
            id="MemeTemplate"
            value={props.updateText}
            onChange={(event) => props.setUpdateText(event.currentTarget.value)}
          />
          <label htmlFor="userInputTop" name="myLabel">
            Top Line
          </label>
          <input
            id="userInputTop"
            value={props.updateTop}
            onChange={(event) => props.setUpdateTop(event.currentTarget.value)}
          />

          <label htmlFor="userInputBottom" name="myLabel">
            Bottom Line
          </label>
          <input
            id="userInputBottom"
            value={props.updateBottom}
            onChange={(event) =>
              props.setUpdateBottom(event.currentTarget.value)
            }
          />
        </form>
        <button
          onClick={() => {
            const link = document.createElement('a');
            link.href = props.fullUrl;
            link.download = 'meme.png';
            link.click();
          }}
        >
          Download
        </button>
      </div>
    </div>
  );
}
