import { techStack, testimonials } from '@/data'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'

const Clients = () => {
    return (
        <div className="py-20" id="testimonials">

            <h1 className="heading">
                Kind words from {" "}
                <span className="text-purple"> satisfied clients</span>
            </h1>

            <div className='flex flex-col items-center max-lg:mt-10'>

                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />

                <h1 className='heading my-12'>
                    Skill <span className='text-purple'>set</span>
                </h1>


                <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>

                    {techStack.map(({ id, img, name, imageName }) => (
                        <div key={id} className='flex md:max-w-60 max-w-32 gap-2 justify-center items-center'>

                            <img
                                src={img}
                                alt={name}
                                className='md:w-10 w-5'
                            />
                            <p>
                                {imageName}
                            </p>

                        </div>
                    ))}


                </div>


            </div>
        </div>
    )
}

export default Clients