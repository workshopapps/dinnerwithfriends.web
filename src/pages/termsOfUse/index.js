import React from 'react'
import { useState } from 'react'
import { termsData } from './termsData'

const TermsOfUse = () => {
  const [active, setActive] = useState("The Agreement")

  const handleActive = (query) => {
    setActive(query);
  }

  return (
    <div className='flex flex-col justify-end mx-4 mt-22 md:flex-row md:mx-10 '>
        <div className='md:w-2/6 h-1/1 sm:w-auto md:fixed top-22 left-4 sticky m-2 mt-10'>
            <h3 className='text-xl font-bold mb-5'>Content</h3>
            <ul>
              {
              termsData.map(term => {
                return (
                  <li className='my-5'>
                    <a 
                      key={term.id} 
                      className={`my-7 font-medium text-base hover:text-blue-800 ${(active === term.heading) ? "text-blue-700" : ""}`} 
                      href={`#${term.heading}`}
                      onClick={() => handleActive(term.heading)}
                    >{term.heading}</a>
                  </li>
                )
              })
              }
            </ul>
        </div>

        <div className='md:w-4/6 w-auto m-2'>
            <p className='my-5 font-bold text-3xl'>Terms of Use</p>
            <p className='mt-2 mb-5'>This document was last updated 15th of December, 2022. To start using our product, read this Terms and Conditions thoroughly.</p>

            {
              termsData.map(term => {
                return (
                  <div key={term.id} id={term.heading}>
                    <h3 className='my-3 mt-10 font-semibold text-base'>{term.heading}</h3>
                    {
                      term.content.map((para) => { return (
                        <p className='mt-2 mb-5 text-medium'>{para}</p>
                      )})
                    }
                  </div>
                )
              })
            }

        </div>
    </div>
  )
}

export default TermsOfUse