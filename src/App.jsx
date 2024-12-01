// const App = () => {
//   return (
//     <>
//       <div className="bg-[#1E1E1E] min-w-screen min-h-screen h-fit p-5 text-white text-center flex flex-col items-center">
//         <img src="/images/logo.svg" className="w-1/2"/>
//         <p className="font-tacticsans text-4xl">Welcome to Vikasana</p>
//         <p className="font-altone text-4xl">You may start editing the "App.jsx"</p>
//       </div>
//     </>
//   );
// }

// export default App;
import React from 'react';
import FirstPage from './components/firstpg'; // Import the firstpg component

const App = () => {
  return (
    <div className="bg-[#1E1E1E] min-w-screen min-h-screen h-fit p-5 text-white text-center flex flex-col items-center">
      <FirstPage /> {/* Render the firstpg component */}
    </div>
  );
}

export default App;
