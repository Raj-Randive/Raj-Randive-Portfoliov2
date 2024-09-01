import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandTelegram, IconBrandX, IconHome } from '@tabler/icons-react'
import { FaLocationArrow } from 'react-icons/fa6'
import { FloatingDock } from './ui/FloatingDock'
import MagicButton from './ui/MagicButton'
import { majorMonoDisplay } from './ui/fonts'

const Footer = () => {

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
            href: "https://x.com/RajRandive_",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/Raj-Randive",
        },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/rajrandive14/",
        },
        {
            title: "Telegram",
            icon: (
                <IconBrandTelegram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://t.me/rajj_14",
        },
        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.instagram.com/raj_xiv.v_/",
        },
    ];

    return (
        <footer className='w-full pt-14 pb-10 md:mb-5 flex flex-col gap-10 lg:gap-0' id='contact'>

            <div className='flex justify-center items-center md:mb-14'>

                <span className={`text-[1.5rem] md:text-[2.5rem] ${majorMonoDisplay.className}`}>rAj rAndiVe</span>

            </div>

            <div className='w-full absolute left-0 -bottom-72 min-h-96'>
                <img src='/footer-grid.svg' alt='grid' className='w-full h-full opacity-65' />
            </div>

            <div className='flex flex-col items-center'>

                <h1 className='heading lg:max-w-[45vw] text-xl'>
                    Ready to take <span className='text-purple'>your</span> digital presence to the next level?
                </h1>

                <p className='text-white-200 md:mt-10 my-5 text-center '>
                    Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
                </p>

                <a href="mailto:randiveraj96@gmail.com">
                    <MagicButton
                        title='Lets get in touch'
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>

            </div>


            <div className='flex mt-5 md:flex-row flex-col justify-between items-center'>

                <p className='hidden md:flex md:text-base text-sm md:font-normal font-light'>
                    © 2024 Raj Randive. All rights reserved.
                </p>

                <div className='flex items-center md:gap-3 gap-6 mt-10 md:mt-0'>
                    <div className='flex justify-center relative my-12 z-10'>
                        <div>
                            <FloatingDock
                                // mobileClassName="translate-y-44 translate-x-40"
                                // desktopClassName="h-40 w-40"
                                items={links}
                            />
                        </div>
                    </div>
                </div>

                <p className='md:hidden md:text-base text-sm md:font-normal font-light'>
                    © 2024 Raj Randive. All rights reserved.
                </p>

            </div>

            <div className='flex justify-center items-center w-full bg-red-400'>

            </div>

        </footer>
    )
}

export default Footer