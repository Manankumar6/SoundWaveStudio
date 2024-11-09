'use client'
import React from 'react'
import courseData from '../app/data/data_course.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'
const FeaturedCourses = () => {

    const featureCourses = courseData.courses.filter((course) => course.isFeatured)

    return (
        <div className='py-12 bg-gray-900'>

            <div className='text-center'>

                <h1 className='text-2xl text-teal-600 font-semibold uppercase tracking-wide'>Featured Courses</h1>
                <p className=' text-4xl mt-2 leading-8 '>Learn With The Best</p>
            </div>

            <div className='mt-10 mx-5'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                    {featureCourses.map((course) => {
                        return (
                          
                                <div className="flex justify-center m-4" key={course.id}>
                                    <BackgroundGradient className='bg-white dark:bg-zinc-700 overflow-hidden h-full max-w-sm rounded-[22px] p-4'>
    <div className="flex flex-col text-center">
      {/* Course Title */}
      <p className="text-xl font-semibold text-gray-900 dark:text-white">{course.title}</p>
      
      {/* Course Description */}
      <p className="text-sm text-gray-700 dark:text-gray-300">{course.description}</p>

      {/* Learn More Link */}
      <Link href={`/courses/${course.slug}`} className="mt-4   hover:underline">
        Learn More
      </Link>
    </div>
  </BackgroundGradient>


                                </div>

                          
                        )
                    })}
                </div>
            </div>
            <div className='mt-20 text-center'>
                <Link href={'/'} className='px-8 py-2 rounded border border-neutral-400 text-neutral-700 bg-white hover:bg-gray-100 transition duration-300'>View All Courses</Link>
            </div>



        </div>
    )
}

export default FeaturedCourses
