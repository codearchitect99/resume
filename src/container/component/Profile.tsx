import React from "react";

const Profile: React.FC = () => {
    return (
        <>
            <div className="card bg-sky-600 text-white">
                <div className="card-body">
                    <div className="flex justify-center w-full">
                        <div className="avatar">
                            <div className="w-52 h-52 rounded-full">
                                <img src="/resume/images/profile.jpg" alt="profile"/>
                            </div>
                        </div>
                    </div>
                    <div className="card-title w-auto justify-center">Seongwon Yang</div>
                    <div className="card-title w-auto justify-center tracking-widest">양 성 원</div>
                    <p>Web Developer</p>
                </div>
            </div>
        </>
    );
};

export default Profile;