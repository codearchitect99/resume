import React from 'react';
import './App.css';
import AboutMe from "./container/AboutMe";
import Portfolio from "./container/Portfolio";

function App() {
    return (
        <div className="App flex justify-center bg-gray-100 w-full h-full">
                <div className="w-[1000px] grid justify-items-center my-10">
                    <div className="grid grid-cols-7 w-full gap-2">
                        <div className="col-span-2 w-full">
                            <AboutMe />
                        </div>
                        <div className="col-span-5 w-full">
                            <Portfolio />
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default App;
