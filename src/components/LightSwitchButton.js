import {useState} from 'react'; //optional


  function LightSwitchButton(props){
    
    // * Extract The Logic From The Component to the App.js
    // const handleClick = () => props.setLight(props.light === "on" ? "off" : "on");

    const { light, switchLight } = props;
    const handleClick = () => switchLight();

    return (
      <button className="LightSwitchButton" onClick={handleClick}>
        {props.light === "on" && <span><i>💡</i> I'm on!</span>}
        {props.light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
      </button>
    );
  }

  export default LightSwitchButton;