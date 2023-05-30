// import React, { useState } from "react";
// import HomeExChild from "./HomeExChild";
// import { countState } from "../../utils/atom";
// import { useRecoilState } from "recoil";

// export default function HomeEx() {
//     const [innerTxt, setInnerTxt] = useState("입력하세요");
//     const [input, setInput] = useState("");

//     const [count, setCount] = useRecoilState(countState);

//     function onChangeInput(e) {
//         setInput(e.target.value);
//     }

//     const submitBtn = (e) => {
//         e.preventDefault();
//         setInnerTxt(input);
//     };

//     const plusNumber = (e) => {
//         setCount(count + 1);
//     };

//     return (
//         <div className="ex-box">
//             {/* <button onClick={}>-</button> */}
//             <div>{setCount}</div>
//             <button onClick={plusNumber}>+</button>
//             {count}
//             {/* <form action="">
//                 <input type="text" name="" id="" onChange={onChangeInput} />
//                 <button className="exBtn" onClick={submitBtn}>
//                     전송
//                 </button>
//             </form>
//             <HomeExChild innerTxt={innerTxt} />
//             {innerTxt} */}
//         </div>
//     );
// }
