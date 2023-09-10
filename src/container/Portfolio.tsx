import React from "react";

function Intro() {
    return <div className="card bg-white text-black shadow-xl">
        <div className="card-body w-full">
            <h2 className="card-title">Intro</h2>
            <div className="grid justify-center">
                <p>웹 풀스택 개발자가 되는 것을 목표로 하고 있습니다.</p>
                <p> 자바와 타입스크립트를 가장 좋아하고 가장 많이 다루고 있습니다.</p>
                <p> 현재 API Server 개발을 주로 공부하고 있습니다</p>
            </div>
        </div>
    </div>;
}

function Skills() {
    return <div className="card bg-white text-black shadow-xl">
        <div className="card-body w-full">
            <h2 className="card-title">Skills</h2>
            <div className="flex justify-center">
                <div className="w-full">
                    <p className="font-semibold">Languages</p>
                    <p>Java</p>
                    <p>TS, JS(NodeJS)</p>
                    <p>C</p>
                    <p>Python</p>
                </div>
                <div className="w-full">
                    <p className="font-semibold">Frameworks</p>
                    <p>Spring</p>
                    <p>NestJS</p>
                    <p>React</p>
                </div>
                <div className="w-full">
                    <p className="font-semibold">Tools</p>
                    <p>Git</p>
                    <p>Github</p>
                    <p>Jira</p>
                    <p>Slack</p>
                    <p>Trello</p>
                    <p>Agit</p>
                </div>
                <div className="w-full">
                    <p className="font-semibold">OS</p>
                    <p>Mac</p>
                    <p>Ubuntu</p>
                    <p>Window</p>
                </div>
            </div>
        </div>
    </div>;
}


const Portfolio: React.FC = () => {
    return (
        <>
            <div className="grid gap-2">
                <Intro/>
                <Skills />
            </div>
        </>
    );
};

export default Portfolio;