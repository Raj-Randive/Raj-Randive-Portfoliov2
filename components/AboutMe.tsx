import { FaLocationArrow } from 'react-icons/fa6';
import { BentoGrid } from './ui/BentoGrid';
import { DirectionAwareHover } from './ui/DirectionAwareHover';
import { FlipWords } from './ui/FlipWords';
import MagicButton from './ui/MagicButton';
import { Meteors } from './ui/MeteorsCard';
import { yatra } from './ui/fonts';

const AboutMe = () => {

    const imageUrl = "/pp4.jpg";
    const words = ["FULL-STACK-DEVELOPER", "DEVOPS", "ANDROID-DEVELOPER", "FREELANCER"];


    return (
        <div className="py-20" id="about">

            <h1 className="heading">
                About {" "}
                <span className={`text-purple`}>Raj Randive</span>
            </h1>

            <div className='flex flex-wrap items-center justify-center gap-x-24 mt-10'>
                <div>
                    <BentoGrid>

                        <div className=" w-full relative lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] text-justify row-span-1">
                            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.85] bg-red-500 rounded-full blur-3xl" />
                            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-8 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-start">
                                {/* <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-2 w-2 text-gray-300"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                                        />
                                    </svg>
                                </div> */}

                                <h1 className={`lg:flex hidden text-white mb-4 pl-0 ml-0 relative z-50 tracking-widest text-center ${yatra.className}`}>
                                    {/* Words Flip */}
                                    <FlipWords words={words} className='text-xl w-full pl-0 ml-0' /> <br />
                                </h1>

                                <p className="font-normal text-[0.95rem] leading-6 lg:text-lg text-slate-500 mb-4 relative z-50">
                                    I am a skilled Full Stack Developer with a strong track record in designing and deploying scalable web applications. Proficient in both front-end and back-end technologies, including JavaScript, React, Node.js, and Python, I build robust and efficient solutions across the tech stack.
                                </p>
                                <p className="font-normal text-[0.95rem] leading-6 lg:text-lg text-slate-500 mb-4 relative z-50">
                                    With hands-on experience in AWS, I specialize in architecting and managing cloud infrastructure, leveraging services like EC2, S3, RDS, and Lambda. My expertise in DevOps practices, including CI/CD, Docker, Kubernetes, and automation tools like Jenkins and Terraform, ensures fast, reliable, and secure software delivery.
                                </p>
                                <p className="font-normal text-[0.95rem] leading-6 lg:text-lg text-slate-500 mb-4 relative z-50">
                                    Passionate about solving complex problems, I continuously adapt to new challenges in the ever-evolving tech landscape.
                                </p>

                                <MagicButton
                                    title="Learn More"
                                    icon={<FaLocationArrow />}
                                    position='right'
                                    otherClasses="text-[16px]"
                                />

                                {/* Meaty part - Meteor effect */}
                                <Meteors number={15} />
                            </div>
                        </div>

                        <div className="hidden md:flex relative lg:col-span-2 md:col-span-6 md:row-span-4 lg:min-h-[60vh]">
                            <DirectionAwareHover imageUrl={imageUrl}>
                                <p className="font-bold text-xl text-white">Avid Developer | Competitive Programmer</p>
                                {/* <p className="font-normal text-sm">$1299 / night</p> */}
                            </DirectionAwareHover>
                        </div>

                    </BentoGrid>
                </div>

                <div>

                </div>
            </div>

        </div>
    )
}

export default AboutMe;