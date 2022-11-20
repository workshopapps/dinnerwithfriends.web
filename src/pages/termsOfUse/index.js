import React from 'react'
import { useState } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { termsData } from './termsData'

const TermsOfUse = () => {
  const [active, setActive] = useState("The Agreement")

  const handleActive = (query) => {
    setActive(query);
  }

  return (
    <>
    <Navbar />
    <div className='flex justify-end md:flex-wrap flex-col mx-4 md:flex-row md:mx-8 m-5 pt-20'>

        <div className='md:w-4/6 w-full m-2 md:px-4'>
          <p className='mb-5 font-bold text-3xl'>Terms of Use</p>
          <p className='mt-2'>This document was last updated 15th of December, 2022. To start using our product, read this Terms and Conditions thoroughly.</p>
        </div>

        <div className='md:w-2/6 sm:w-auto md:sticky h-screen top-0 static px-2 md:-mt-24 mt-10 my-20'>
            <h3 className='text-xl font-bold'>Content</h3>
            <ul>
              {
              termsData.map(term => {
                return (
                  <li className='my-5' key={term.id}>
                    <a  
                      className={`my-4 font-medium text-base hover:text-blue-800 ${(active === term.heading) ? "text-blue-700" : ""}`} 
                      href={`#${term.heading}`}
                      onClick={() => handleActive(term.heading)}
                    >{term.heading}</a>
                  </li>
                )
              })
              }
            </ul>
        </div>

        <div className='md:w-4/6 w-auto p-2'>

            {
              termsData.map(term => {
                return (
                  <div key={term.id} id={term.heading}>
                    <h3 className='py-3 pt-10 font-semibold text-base'>{term.heading}</h3>
                    {
                      term.paragraphs.map((para, index) => { return (
                        <p key={index} className='pt-2 pb-4 text-medium'>{para}
                          <a className='text-blue-700' href={`mail.to:${term.emailLink}`}>{term.emailLink && term.emailLink}</a>
                        </p>
                      )})
                    }
                    <ul>
                      { term.lists &&
                        term.lists.map((listItem,index) => { return (
                          <li key={index}>{listItem} <a href={`https://${term.links[index]}`} className="text-blue-700">{term.links[index]}</a></li>
                        )})
                      }
                    </ul>
                  </div>
                )
              })
            }

        </div>
    </div>
    <Footer />
    </>
  )
}

export default TermsOfUse