'use client'
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";
const UpcomingWebinar = () => {
    const projects = [
        {
            title: "Guitar Basics",
            description:
                "An online course that teaches fundamental guitar skills for beginners, covering chords, strumming patterns, and basic theory.",
            link: "https://guitarbasicsonline.com",
        },
        {
            title: "Jazz Improvisation",
            description:
                "A program designed for musicians looking to learn jazz improvisation techniques, with lessons on scales, modes, and phrasing.",
            link: "https://jazzimprovisation.com",
        },
        {
            title: "Music Theory 101",
            description:
                "An in-depth guide to understanding the basics of music theory, including scales, intervals, chords, and rhythm.",
            link: "https://musictheory101.com",
        },
        {
            title: "Vocal Training",
            description:
                "A platform that provides personalized vocal training exercises to improve pitch, tone, and range for singers of all levels.",
            link: "https://vocaltraining.com",
        },
        {
            title: "Electronic Music Production",
            description:
                "A comprehensive course on producing electronic music, focusing on beat-making, synthesizers, and digital audio workstations.",
            link: "https://emusicproduction.com",
        },
        {
            title: "Classical Piano Mastery",
            description:
                "A classical piano course that covers advanced techniques and repertoire, aimed at helping pianists master classical compositions.",
            link: "https://classicalpianomastery.com",
        },
    ];
    return (
        <div className='py-12 bg-gray-900'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className='text-center'>
                    <h2 className='text-teal-600 text-2xl font-bold'>FEATURED WEBINAR</h2>
                    <p className='text-4xl'>Enhance Your Musical Jounery</p>
                </div>
                <div className='mt-10 '> <div className="max-w-5xl mx-auto px-8">
                    <HoverEffect items={projects} />
                </div></div>
                <div className='mt-10 text-center '>
                    <Link href={'/'} className='px-8 py-2 rounded border border-neutral-400 text-neutral-700 bg-white hover:bg-gray-100 transition duration-300'>View All Webinars</Link>
                </div>

            </div>
          
        </div>
    )
}

export default UpcomingWebinar
