import React from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as Arrow } from "../assets/ArrowRightOutline.svg";

const GetStarted = () => {
    return (
        <section className="bg-[#E7F0FF] h-[500px]">
            <h5 className="font-bold text-2xl w-[80vw] md:text-5xl lg:w-[825px] m-auto pt-32 md:pl-20 lg:pl-32">Organize your next social gathering, on <span className="text-[#0056D6]"> Catch</span> up</h5>
            <p className="text-[#717172] text-base m-auto w-64 pt-10">Look no further, Get started today.</p>
            <button type="button" className="bg-[#0056D6] w-36 h-11 rounded-md md:w-52 md:h-14 text-white flex justify-center items-center gap-3 m-auto mt-10">
              <Link to='/sign_up' className='flex justify-center items-center gap-x-3'>
                Get Started <Arrow />
              </Link>
            </button>
        </section>
    )
};

export default GetStarted
