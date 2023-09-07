import React from 'react';
import './App.css';
import Profile from "./components/Profile";

function App() {
    return (
        <div className="App flex justify-center">
            <div className="bg-gray-100 w-[1000px] grid justify-items-center mt-10">
                <div className="grid grid-cols-3 w-full">
                    <div className="col-span-1 w-full border-2">
                        <Profile />
                    </div>
                    <div className="col-span-2 w-full border-2">
                        fsdfdsfs
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
