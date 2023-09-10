import React from "react";

function Contact() {
    return (
        <div className="card-body">
            <h2 className="card-title">Contact</h2>
            <div className="flex justify-start">
                <div className="flex gap-2">
                    <img src="/resume/images/email.png" alt="email" className="w-6"/>
                    <p>ysw991106@gmail.com</p>
                </div>
            </div>
            <div className="flex justify-start">
                <div className="flex gap-2">
                    <img src="/resume/images/github-logo.png" alt="github" className="w-6"/>
                    <p><a href="http://github.com/codeartitect">github</a></p>
                </div>
            </div>
            <div className="flex justify-start">
                <div className="flex gap-2">
                    <img src="/resume/images/programmers.png" alt="programmers" className="w-6"/>
                    <p><a href="https://career.programmers.co.kr/pr/ysw991106_6466">programmers</a></p>
                </div>
            </div>
        </div>
    );
}

function Education() {
    return (
        <div className="card-body grid">
            <h2 className="card-title">Education</h2>
            <div className="flex justify-start">
                <div className="flex gap-2 w-full">
                    <img src="/resume/images/graduation-cap.png" alt="graduation" className="w-6 h-6"/>
                    <div className="grid justify-start w-full">
                        <div className="flex justify-start w-full">학사</div>
                        <div className="flex justify-start w-full">제주대학교, 컴퓨터공학전공</div>
                        <div className="flex justify-start w-full">2018 ~ 2024</div>
                    </div>
                </div>
            </div>

            <div className="flex justify-start">
                <div className="flex gap-2 w-full">
                    <img src="/resume/images/graduation-cap.png" alt="graduation" className="w-6 h-6"/>
                    <div>
                        <div className="flex justify-start w-full">고등학교</div>
                        <div className="flex justify-start w-full">제주사범대학부설고등학교</div>
                        <div className="flex justify-start w-full">2015 ~ 2018</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Info: React.FC = () => {
    return (
        <div className="card w-full h-full bg-sky-600 text-white">
            <Contact/>
            <Education/>
        </div>
    );
};

export default Info;