import React from 'react';
import Header from './components/Header';
import Grid from './components/Grid';


function App() {
           
  return (
   <div className="flex flex-col">
    <Header />
    <div className="grid grid-cols-4 ">
      <div id="column" className="text-4xl bg-gray-200 m-1 rounded-md">
        Column 1
        <div className="bg-green-400 m-1 h-[400px] rounded-md"></div>
        <div className="bg-green-400 m-1 h-[200px] rounded-md"></div>
        <div className="bg-green-400 m-1 h-[100px] rounded-md"></div>
      </div>
      <div id="column" className="col-span-2 text-4xl bg-gray-200 m-1 rounded-md">
        Column 2
      <div className="bg-green-400 m-1 h-[100px] rounded-md"></div>
        <div className="bg-green-400 m-1 h-[400px] rounded-md"></div>
        <div className="bg-green-400 m-1 h-[200px] rounded-md"></div>
      </div>
      <div id="column" className="text-4xl bg-gray-200 m-1 rounded-md">
        Column 3
      <div className="bg-green-400 m-1 h-[200px] rounded-md"></div>
        <div className="bg-green-400 m-1 h-[100px] rounded-md"></div>
        <div className="bg-green-400 m-1 h-[400px] rounded-md"></div>
      </div>
    </div>
   </div>
  )
}

export default App
