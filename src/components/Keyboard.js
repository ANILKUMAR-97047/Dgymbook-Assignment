// import React from "react";
// import "../styles/Keyboard.css";

// const Keyboard = ({ handleKeyPress }) => {
//   const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

//   return (
//     <div className="keyboard">
//       {rows.map((row, rowIndex) => (
//         <div key={rowIndex} className="keyboard-row">
//           {row.split("").map((key) => (
//             <button key={key} className="key" onClick={() => handleKeyPress(key.toLowerCase())}>
//               {key}
//             </button>
//           ))}
//         </div>
//       ))}
//       <div className="keyboard-row">
//         <button className="key special" onClick={() => handleKeyPress("Backspace")}>⌫</button>
//         <button className="key special" onClick={() => handleKeyPress("Enter")}>Enter</button>
//       </div>
//     </div>
//   );
// };

// export default Keyboard;
import React from "react";
import "../styles/Keyboard.css";

const Keyboard = ({ handleKeyPress }) => {
  const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

  return (
    <div className="keyboard">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.split("").map((key) => (
            <button key={key} className="key" onClick={() => handleKeyPress(key.toLowerCase())}>
              {key}
            </button>
          ))}
        </div>
      ))}
      <div className="keyboard-row">
        <button className="key special" onClick={() => handleKeyPress("Backspace")}>⌫</button>
        <button  className="key special" onClick={() => handleKeyPress("Enter")}>Enter</button>
      </div>
    </div>
  );
};

export default Keyboard;
