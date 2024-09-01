import { featuredProjects } from '@/data'
import Link from 'next/link'
import { FaLocationArrow } from 'react-icons/fa6'
import MagicButton from './ui/MagicButton'
import { PinContainer } from './ui/Pin3d'

const AllProjects = () => {
    return (
        <div className="py-20" id="projects">

            <h1 className="heading mt-4 md:-mb-14">
                A small selection of {" "}
                <span className="text-purple">recent projects</span>
            </h1>

            <div className='flex flex-wrap items-center justify-center gap-x-16 '>

                {featuredProjects.map(({ id, title, des, img, link, iconLists }) => (

                    <div key={id} className='sm:h-[41rem] h-[29rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[370px] w-[80vw]'>

                        <PinContainer
                            title={link}
                            href={link}

                        >
                            <div className='relative flex items-center justify-center sm:w-[370px] w-[80vw] overflow-hidden lg:h-[30vh] mb-10 sm:h-[40vh] h-[25vh]'>

                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                    <img src="/bg.png" alt="bg-img" className='overflow-hidden' />
                                </div>

                                <img src={img} alt={title} className='z-10 absolute bottom-0 lg:rounded-3xl' />

                            </div>

                            <h1 className='font-bold md:text-lg text-base line-clamp-1 mb-2'>
                                {title}
                            </h1>

                            <p className='lg:font-normal font-light text-sm line-clamp-2'>
                                {des}
                            </p>

                            <div className='flex items-center justify-between mt-7 mb-3'>

                                <div className='flex items-center'>
                                    {iconLists.map((eachIcon, index) => (
                                        <div key={eachIcon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'

                                            style={{ transform: `translateX(-${5 * index * 2}px)` }}
                                        >
                                            <img src={eachIcon} alt={eachIcon} className='p-2'></img>
                                        </div>
                                    ))}
                                </div>

                                <div className='flex items-center justify-center'>
                                    <p className='flex md:text-xs text-xs text-purple'>Check Live Site</p>
                                    <FaLocationArrow className='ms-2' color='#CBACF9' />
                                </div>

                            </div>

                        </PinContainer>

                    </div>
                ))
                }
                <div className="mt-8 md:-mt-14">
                    <Link href={"/projects"}>
                        <MagicButton
                            title="See More"
                            icon={<FaLocationArrow />}
                            position='right'
                            otherClasses="text-[16px]"
                        />
                    </Link>
                </div>

            </div >

        </div >
    )
}

export default AllProjects;