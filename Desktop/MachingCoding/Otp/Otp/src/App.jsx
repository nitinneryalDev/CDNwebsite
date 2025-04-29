import { useRef, useState } from "react";

import "./App.css";

function App() {
  const NoofFields = 6;

  const [count, setCount] = useState(new Array(NoofFields).fill(""));

  const ref = useRef([]);

  let handleClick = (e, index) => {
    let value = e.key;
    let data = [...count];

    //  // if the BackSpace is clicked
    if (value === "Backspace") {
 data[index] = "";
      setCount(data); 
      ref.current[index - 1].focus();
    }

    //  // if the ArrowRight is clicked
    if (value === "ArrowRight") {
      ref.current[index + 1].focus();
    }

    //  // if the ArrowLeft is clicked
    if (value === "ArrowLeft") {
      ref.current[index - 1].focus();
    }
    console.log("value pressed is ", value);
    // If the input is not a number
    if (isNaN(value)) {
      return;
    }

    data[index] = value;

    // Only will fill the otp field if
    if (data[index + 1] < data.length) ref.current[index + 1].focus();
    setCount(data);
  };

  return (
    <>
      <h1>OTP input Fields</h1>
      {count.map((item, index) => {
        return (
          <>
            <input
              type="text"
              key={index}
              ref={(currentInput) => {
                ref.current[index] = currentInput;
              }}
              className="inputField"
              value={item}
              onKeyDown={(e) => handleClick(e, index)}
            />{" "}
          </>
        );
      })}
    </>
  );
}

export default App;
