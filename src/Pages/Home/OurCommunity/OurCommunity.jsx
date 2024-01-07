/* eslint-disable react/no-unescaped-entities */
import imgg from "../../../assets/Images/teacher_community.jpg"
const OurCommunity = () => {
    return (
        <div className="hero h-screen md:h-96 w-[90%] md:w-[70%] mx-auto my-4 md:my-5 bg-green-600 rounded-xl shadow-2xl">
            <div className="hero-content flex-col lg:flex-row">
                <img src={imgg} className="max-w-sm h-36 md:h-80 rounded-2xl shadow-2xl" />
                <div className="ps-4 md:ps-8">
                    <p className="py-6 md:text-center text-zinc-200 italic">The community of our teachers is very amazing.They always help each other and good to face any challanges together.They try to give best teaching to their students so that students can success in their life.They think best for their institutions.They take good care of the institutions and our authorities always look after them.This makes our institutions service better.</p>
                </div>
            </div>
        </div>
    );
};

export default OurCommunity;