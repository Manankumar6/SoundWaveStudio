'use client'
import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal';
import Image from 'next/image';

const WhyChooseUs = () => {

    const musicSchoolContent = [
        {
            title: "Beginner Piano Lessons",
            description: "Our beginner piano lessons are perfect for students of all ages who are just starting out. These lessons cover the basics of reading music, hand positioning, and simple songs to build confidence and foundational skills.",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                  <Image
                    src="https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                  />
                </div>
              ),
        },
        {
            title: "Advanced Guitar Techniques",
            description: "Designed for experienced guitar players, this course dives into advanced techniques such as fingerstyle, sweep picking, and solo improvisation. Perfect for students looking to refine their style and master complex pieces.",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1671934973818-8529ac9c4d2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                  />
                </div>
              ),
        },
        {
            title: "Vocal Training for All Levels",
            description: "From breathing exercises to mastering pitch, our vocal training program is crafted to improve your singing abilities. With personalized instruction, this program caters to beginners as well as advanced vocalists.",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1682614309378-68ff39240020?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                  />
                </div>
              ),
        },
        {
            title: "Music Theory Essentials",
            description: "Understanding music theory is key to mastering any instrument. This course breaks down chords, scales, and rhythm patterns, empowering students to read and write music proficiently.",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                  <Image
                    src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                  />
                </div>
              ),

        },
        {
            title: "Jazz Ensemble Workshop",
            description: "Join our Jazz Ensemble Workshop to explore the art of ensemble performance, improvisation, and the fundamentals of jazz. This workshop is ideal for musicians with a love for jazz and a desire to perform in a group setting.",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1681389126724-4f9a956845e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                  />
                </div>
              ),
        }
    ];



    return (
        <div className='w-full'>
           <StickyScroll content={musicSchoolContent}/>
        </div>
    )
}

export default WhyChooseUs
