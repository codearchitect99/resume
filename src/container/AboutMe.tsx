import React from "react";
import Profile from "./component/Profile";
import Info from "./component/Info";

const AboutMe: React.FC = () => {
    return (
        <>
            <div className="w-full">
                <Profile/>
                <div className="mt-2" />
                <Info/>
            </div>
        </>
    );
};

export default AboutMe;
