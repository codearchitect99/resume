import React from "react";

const Profile: React.FC = () => {
    // 학력 정보 데이터
    const educationData = [
        {
            title: "Computer Engineering",
            institution: "Jeju National University",
            department: "제주대학교 컴퓨터공학전공",
            date: "2018.03 ~ 2024.02",
        },
    ];

    // 학력 정보 데이터 (졸업 정보)
    const graduatedData = [
        {
            title: "Jeju National University High School",
            department: "제주사대부고",
            date: "2015.03 ~ 2018.02",
        },
    ];

    // 연락 정보 데이터
    const contactData = [
        {
            icon: "resume/images/email.png",
            text: "ysw991106@gmail.com",
            link: "mailto:ysw991106@gmail.com",
        },
        {
            icon: "resume/images/github-logo.png",
            text: "github.com/codeartitect",
            link: "https://github.com/codeartitect",
        },
        {
            icon: "resume/images/programmers.png",
            text: "career.programmers.co.kr/job_profiles",
            link: "https://career.programmers.co.kr/pr/ysw991106_6466",
        },
    ];

    return (
        <>
            <div className="bg-blue-500 w-full">
                <div className="flex justify-center w-full">
                    <div className="avatar mt-10">
                        <div className="w-52 h-52 rounded-full">
                            <img src="/resume/images/profile.jpg" alt="profile" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div>
                        <p className="text-white text-2xl mt-10">Seongwon Yang</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div>
                        <p className="text-white text-xl my-5">Web Developer</p>
                    </div>
                </div>
            </div>

            <div className="bg-blue-400 w-full">
                <div className="grid justify-start gap-2">
                    {/* 연락 정보 */}
                    <div className="grid justify-start">
                        <p className="text-white ml-4 mt-5 text-xl">Contact</p>
                    </div>
                    {contactData.map((item, index) => (
                        <div className="ml-4 flex" key={index}>
                            <div className="w-5 h-5 mr-2">
                                <img src={item.icon} alt={item.text} />
                            </div>
                            <div>
                                {item.link ? (
                                    <a href={item.link} className="text-white">
                                        {item.text}
                                    </a>
                                ) : (
                                    <p className="text-white">{item.text}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid justify-start gap-2 w-max">
                    {/* 학력 정보 */}
                    <div className="grid justify-start w-max">
                        <p className="text-white ml-4 mt-5 text-xl">Education</p>
                    </div>
                    {educationData.map((item, index) => (
                        <div className="grid justify-start w-max" key={index}>
                            <p className="text-white">{item.title}</p>
                            <p className="text-gray-300 ml-4">{item.institution}</p>
                            <p className="text-gray-300 ml-4">{item.department}</p>
                            <p className="text-gray-300">{item.date}</p>
                        </div>
                    ))}
                    {graduatedData.map((item, index) => (
                        <div className="grid justify-start w-max ml-4" key={index}>
                            <p className="text-white w-max">{item.title}</p>
                            <p className="text-gray-300 ml-4 w-max">{item.department}</p>
                            <p className="text-gray-300 ml-4 w-max">{item.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Profile;
