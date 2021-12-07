
import {useRecoilState, useRecoilValue, atom, selector} from 'recoil'

export default function CharacterCounter() {
    return (
      <div>
        <TextInput />
        <CharacterCount/>
      </div>
    );
  }

  const textState = atom({ // bloop
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });
  
  function TextInput() {
    const [text, setText] = useRecoilState(textState);
  
    const handleChange = (event) => {
      setText(event.target.value);
    };
  
    return (
      <div>
        <input type="text" value={text} onChange={handleChange} />
        <br />
        Echo: {text}
      </div>
    );
  }

  const charCountState = selector({ // morph
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const text = get(textState); //an existing piece of state
  
      return text.length
    },
  });


  function CharacterCount() {
    const count = useRecoilValue(charCountState);
  
    return <>Character Count: {count}</>;
  }