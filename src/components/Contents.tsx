import React from "react";
import Profile from "./Profile";
import Portfolio from "./Portfolio";

const Contents: React.FC = () => {
    return (
        <div className="w-full h-full flex justify-center">
            <div className="w-[1200px] h-full my-10">
                <div className="w-full h-full grid grid-cols-3">
                    <div className="col-span-1 w-full h-full bg-blue-400 border-2 rounded-xl">
                        <div className="mx-1">
                            <Profile />
                        </div>
                    </div>
                    <div className="col-span-2 w-full h-full bg-white border-2 rounded-xl">
                        <div className="mx-1">
                            <Portfolio />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contents;