import React from 'react'
import profile from '../assets/profile.jpg'
import TechStack from './TechStack';
import Footer from './Footer';
import { FaCode } from "react-icons/fa6";
import { IoLocationOutline } from 'react-icons/io5';
import { BiEnvelope } from 'react-icons/bi';
import Bio from './bio';
import Projects from './Projects';
import Navbar from './Navbar';
import GitHubContributions from './GitHubContributions';

const Profile = () => {
    return (
        <div className=''>
            {/* Navbar */}
            <Navbar />
            <section className='flex-col flex px-6 pt-30'>
                <div className='flex items-center '>
                    <div className='mr-4'>
                        <img src={profile} alt="" className='rounded-full h-19 w-19 object-cover border-2 border-white ' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1
                            className='text-[24px]  text-white flex-col flex p1 bg-linear-to-r from-slate-200 via-white to-slate-300 bg-clip-text relative group cursor-pointer overflow-hidden hover:from-cyan-400 hover:via-cyan-200 hover:to-emerald-400 transition-all duration-700 ease-out'
                            data-text="Adinath Gaware"
                        >
                            <span className="block absolute inset-0 bg-linear-to-r from-slate-200 via-white to-slate-300 bg-clip-text -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-out delay-200 origin-left"></span>
                            Adinath Gaware
                        </h1>
                        <div className='text-[16px] font-sans q2 text-gray-300'>
                            Front-end Developer
                        </div>
                    </div>
                </div>
            </section>
            {/* bio */}
            <Bio />
            {/* Tech stack */}
            <TechStack />
            {/* github contribution */}
            <GitHubContributions />
            {/* Projects */}
            <Projects />
            {/* footer */}
            <Footer />
        </div>
    )
}

export default Profile;
