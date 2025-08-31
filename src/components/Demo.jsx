// import React, { useState, useCallback } from "react";

// const Button = React.memo(({ handleClick }) => {
//   console.log("Button rendered");
//   return <button onClick={handleClick}>Click Me</button>;
// });

// function Demo() {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     setCount((prev) => prev + 1);
//     console.log("rendering")
//   }, []); // memoized function

//   return (
//     <div className="absolute bg-white mt-30 z-10">
//       <p>Count: {count}</p>
//       <Button handleClick={handleClick}/>
//     </div>
//   );
// }

// export default Demo;
