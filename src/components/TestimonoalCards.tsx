'use client'
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const TestimonoalCards = () => {
    const testimonials = [
        {
            name: "John Doe",
            title: "Piano Student",
            quote: "Learning piano at this school has been a wonderful experience! The instructors are incredibly patient and make each lesson engaging and fun."
        },
        {
            name: "Jane Smith",
            title: "Guitar Student",
            quote: "The guitar lessons are top-notch! I've improved my skills tremendously and even started performing confidently in front of others."
        },
        {
            name: "Michael Lee",
            title: "Parent of a Vocal Student",
            quote: "I’m so impressed with the progress my child has made in just a few months. The teachers are supportive and genuinely care about their students' growth."
        }
    ];

    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.1] items-center justify-center relative overflow-hidden">
            <h2 className=' text-2xl md:text-4xl'>Hear Our Hermony : Voice of success</h2>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    )
}

export default TestimonoalCards
