// import React, { useState, useEffect, useRef } from "react";
// import imagePaths from "../data/imagePaths.json"; // Import the image paths

// const ChatBubble = () => {
//   const [inputText, setInputText] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [isVisible, setIsVisible] = useState(false);
//   const chatContainerRef = useRef(null);
//   const robotIconRef = useRef(null);

//   const handleChange = (e) => {
//     setInputText(e.target.value);
//   };

//   const handleSend = () => {
//     if (inputText.trim() !== "") {
//       setMessages([...messages, inputText]);
//       setInputText("");
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSend();
//     }
//   };

//   const handleClickOutside = (e) => {
//     if (
//       chatContainerRef.current &&
//       !chatContainerRef.current.contains(e.target) &&
//       robotIconRef.current &&
//       !robotIconRef.current.contains(e.target)
//     ) {
//       setIsVisible(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleRobotIconClick = () => {
//     setIsVisible(!isVisible);
//   };

//   return (
//     <>
//       {isVisible && (
//         <div className="fixed bottom-16 right-4 z-50 flex items-end">
//           <div
//             ref={chatContainerRef}
//             className="relative max-w-xs mx-auto mr-12 mb-12"
//             style={{ width: "273px", height: "267px" }}
//           >
//             <div
//               className="bg-white rounded-t-lg rounded-br-lg p-4 shadow-lg overflow-y-auto"
//               style={{ width: "273px", height: "267px" }}
//             >
//               <div className="flex items-start">
//                 <img
//                   src={imagePaths.robotIcon} // Ensure you have the correct path for the robot icon
//                   alt="Robot Icon"
//                   className="w-6 h-6 mr-2"
//                 />
//                 <div className="flex flex-col flex-grow">
//                   <p className="text-black">Hi There</p>
//                   {messages.map((message, index) => (
//                     <div key={index} className="flex justify-end mt-1">
//                       <p className="bg-customBlue text-white px-2 py-1 rounded-md">
//                         {message}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-between items-center bg-white rounded-b-lg shadow-lg p-2">
//               <input
//                 type="text"
//                 placeholder="Type Here"
//                 className="border-none flex-grow focus:outline-none px-2"
//                 value={inputText}
//                 onChange={handleChange}
//                 onKeyPress={handleKeyPress}
//               />
//               <button
//                 className="flex items-center justify-center w-8 h-8 bg-customBlue rounded-full"
//                 onClick={handleSend}
//               >
//                 <img
//                   src={imagePaths.sendArrow} // Ensure you have the correct path for the send arrow icon
//                   alt="Send Arrow"
//                   className="w-4 h-4"
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       <div
//         ref={robotIconRef}
//         className="fixed bottom-6 right-4 bg-customBlue w-12 h-12 rounded-full flex items-center justify-center"
//         onClick={handleRobotIconClick}
//       >
//         <img
//           src={imagePaths.robotIcon} // Ensure you have the correct path for the robot icon
//           alt="Robot Icon"
//           className="w-8 h-8"
//         />
//       </div>
//     </>
//   );
// };

// export default ChatBubble;

import React, { useState, useRef, useEffect } from "react";
import imagePaths from "../data/imagePaths.json"; // Import the image paths
import "../index.css";

const ChatBubble = () => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const chatBubbleRef = useRef(null);
  const robotIconRef = useRef(null);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSend = () => {
    if (inputText.trim() !== "") {
      setMessages([...messages, inputText]);
      setInputText("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleRobotIconClick = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event) => {
    if (
      chatBubbleRef.current &&
      !chatBubbleRef.current.contains(event.target) &&
      robotIconRef.current &&
      !robotIconRef.current.contains(event.target)
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bottom-16 right-4 z-50 flex items-end shadow-lg">
      {isVisible && (
        <div
          ref={chatBubbleRef}
          className="relative max-w-xs mx-auto mr-12 mb-12"
          style={{ width: "273px", height: "267px" }}
        >
          <div
            className="bg-[#f4f4f4] rounded-t-lg rounded-br-lg p-4 shadow-lg overflow-y-auto"
            style={{ width: "273px", height: "267px" }}
          >
            <div className="flex items-start">
              <img
                src={imagePaths.robotIcon} // Ensure you have the correct path for the robot icon
                alt="Robot Icon"
                className="w-[44px] h-[44px] mr-2"
              />
              <div className="flex flex-col flex-grow">
                <p className="text-black pt-2">Hi There</p>
                {messages.map((message, index) => (
                  <div key={index} className="flex justify-end mt-1">
                    <p className="bg-customBlue text-white px-2 py-1 rounded-md">
                      {message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center bg-[#f4f4f4] rounded-b-lg shadow-lg p-2 border-t border-gray-300">
            <input
              type="text"
              placeholder="Type Here"
              className="border-none flex-grow focus:outline-none px-2"
              value={inputText}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
            />
            <button
              className="flex items-center justify-center w-8 h-8 bg-customBlue rounded-full"
              onClick={handleSend}
            >
              <img
                src={imagePaths.sendArrow} // Ensure you have the correct path for the send arrow icon
                alt="Send Arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
          <div className="absolute transform rotate-0 w-10 h-10 right-[1.2rem] bottom-for-traingle">
            <img
              src={imagePaths.triangleIcon} // Ensure you have the correct path for the triangle icon
              alt="Triangle"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
      <div
        ref={robotIconRef}
        className="fixed bottom-6 right-4 bg-customBlue w-12 h-12 rounded-full flex items-center justify-center"
        onClick={handleRobotIconClick}
      >
        <img
          src={imagePaths.robotIcon} // Ensure you have the correct path for the robot icon
          alt="Robot Icon"
          className="w-8 h-8"
        />
      </div>
    </div>
  );
};

export default ChatBubble;
