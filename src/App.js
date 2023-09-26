import { useState } from "react";
import Dropdown from "./Components/Dropdown";

const App = () => {
  //set required states using hooks
  const [isShow, setIsShow] = useState(false);
  const [selected, setSelected] = useState("Not selected");
  

  //dropdown items array
  const item = ["Yes", "Probably Not", "I don't know"];

  return (
    <>
    {/* creating whole UI using JSX*/}
      <div className="app">
        <div className="home">
          <h1>Q. Should you use a Dropdown ?</h1>
          {/* On hovering on the button, make Dropdown Component Visible*/}
          <button onMouseEnter={() => {setIsShow(true)}}>
            Select
          </button>
        </div>

        {/* call Dropdown componend as per condition and passing required functions from props */}
        {isShow ? (
          <Dropdown
            items={item}
            handleOnClick={(item) => {
              setIsShow(false);
              setSelected(item);
            }}
          />
        ) : ("")}

        {/* display selected option on UI */}
        <p style={isShow?{bottom:"20px"}:{fontSize:"1.5rem"}} className="ans-p">Ans: <strong>{selected}</strong></p>

      </div>
    </>
  );
};

export default App;
