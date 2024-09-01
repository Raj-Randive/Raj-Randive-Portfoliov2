
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandTelegram, IconBrandX, IconHome } from '@tabler/icons-react'
import { FaLocationArrow } from 'react-icons/fa6'
import { DirectionAwareHover } from './ui/DirectionAwareHover'
import { FlipWords } from './ui/FlipWords'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { majorMonoDisplay, yatra } from './ui/fonts'

const Hero = () => {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-white dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Telegram",
            icon: (
                <IconBrandTelegram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
    ];

    const words = ["FULL-STACK-DEVELOPER", "DEVOPS", "ANDROID-DEVELOPER", "FREELANCER"];
    const imageUrl = "/pp4.jpg";

    return (
        <div className='pb-20 md:pt-28 pt-4'>

            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />

                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />

                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />


                {/* GRID BACKGROUND */}
                <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                </div>


                <div className='flex justify-center relative my-20 z-10'>

                    <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]  flex flex-col items-center justify-center lg:gap-2 gap-4'>

                        <div className="md:hidden rounded-full">
                            <DirectionAwareHover imageUrl={imageUrl} className='h-60 w-60 rounded-full'>
                                <p className="font-bold text-xl text-white"></p>
                            </DirectionAwareHover>
                        </div>

                        {/* Words Flip */}
                        <h2 className={`tracking-widest text-center text-blue-100 mt-8 ${yatra.className}`}>
                            <FlipWords words={words} className='md:text-4xl text-xl w-full' /> <br />
                        </h2>

                        <TextGenerateEffect
                            className='text-center text-3xl md:text-5xl lg:text-6xl'
                            words="Converting Concepts into Smooth User Interactions"
                        />

                        <p className={`text-center md:tracking-wider mb-4 text-base md:text-lg lg:text-2xl lg:mt-8 ${majorMonoDisplay.className}`}>
                            Hi, i&apos;m rAj, a seasoned Web deVeloper based in india
                        </p>

                        <a href="#projects">
                            <MagicButton
                                title="Show my Work"
                                icon={<FaLocationArrow />}
                                position='right'
                                otherClasses="text-[16px]"
                            />
                        </a>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Hero