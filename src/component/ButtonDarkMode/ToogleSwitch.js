// import React, { useState, useContext } from "react";
// import StyleContext from "../../contexs/StyleContext";
// import "./ToogleSwitch.css";

// const ToogleSwitch = () => {
//     const { isDark } = useContext(StyleContext);
//     const [isChecked, setChecked] = useState(isDark);
//     const styleContext = useContext(StyleContext);

//     return (
//         <label className="switch">
//             <input
//                 className="change"
//                 type="checkbox"
//                 checked={isDark}
//                 onChange={() => {
//                     styleContext.changeTheme();
//                     setChecked(!isChecked);
//                 }}
//             />
//             <span className="slider round"></span>
//         </label>
//     );
// };
// export default ToogleSwitch;
