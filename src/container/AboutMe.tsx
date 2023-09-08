import React from "react";
import Profile from "./component/Profile";
import Info from "./component/Info";

const AboutMe: React.FC = () => {
    return (
        <>
            <div className="grid w-full gap-2">
                <Profile />
                <Info />
            </div>
        </>
    );
};

export default AboutMe;
