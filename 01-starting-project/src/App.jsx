import Header from "./component/header"
import InputArea from "./component/inputArea"
import OutputArea from "./component/OutputArea"
import { useState } from 'react';

function App() {

  const [userInput, setUserInput] = useState({
    initial: '',
    annual: '',
    expected: '',
    duration: ''
  })
  const inputIsValid = userInput.duration >= 1;

  function handleChange(e) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [e.target.name]: +e.target.value,
      };
    });
  }

  return (
    <>
      <Header />
      <InputArea onChange={handleChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">
          Please enter a duration greater than zero
        </p>
      )
      }
      {inputIsValid && <OutputArea input={userInput} />}
    </>

  )
}

export default App
