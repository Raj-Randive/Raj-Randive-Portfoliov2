import Footer from '@/components/Footer'
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid'
import { GlobeDemo } from '@/components/ui/GithubGlobe'
import { gridItems } from '@/data'
import React from 'react'

const Contact = () => {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">

            <div className="max-w-7xl w-full my-10">

                <h1 className="heading my-12">
                    Contact {" "}
                    <span className="text-purple">Us</span>
                </h1>

                <GlobeDemo />


            </div>
            <Footer />

        </main>
    )
}

export default Contact