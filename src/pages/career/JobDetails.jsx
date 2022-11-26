import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const JobDetails = () => {
  return (
    <>
    <Navbar/>
    <div className="w-full mt-[3rem] lg:py-[9rem] lg:px-[6rem] p-[1rem] bg-[url('assets/img/VectorsHome.png')] bg-no-repeat bg-center   h-full flex justify-between  " >
        {/* sidebar */}
        <div className='lg:flex hidden lg:mt-[10rem] h-[0rem] w-[0rem] lg:h-full flex-col space-y-12 lg:w-[30%]'>
            <a href='#about' className='font-bold text-[1rem] lg:text-[1rem] text-[#0056D6]' >About Pipe</a>
             <a href='#role' className='font-bold text-[1rem] lg:text-[1rem] text-[#59595B]' >The Role</a>
             <a href='#stack' className='font-bold text-[1rem] lg:text-[1rem] text-[#59595B]' >Tech Stack</a>
             <a href='#qualifications' className='font-bold text-[1rem] lg:text-[1rem] text-[#59595B]' >Qualifications</a>
             <a href='#benefits' className='font-bold text-[1rem] lg:text-[1rem] text-[#59595B]' >Compensation and
Benefits</a>
<a href='/careers/job-details' className='text-center lg:text-[20px] text-[14px] h-[56px] flex items-center justify-center w-[110px] lg:w-[152px] float-right lg:float-right lg:h-[56px] font-base text-[#fff] bg-[#1070FF] lg:p-[12px 32px] ' >Apply</a>
              

        </div>
         <div className='flex lg:p-[3rem] p-[1rem] border-solid-[#BCD7FF] border-2 rounded-xl flex-col lg:w-[70%] w-full bg-[#FAFCFF] h-full '>
            <p className='font-bold text-[20px] lg:text-[1.75rem] text-[#151517]'>Senior Backend Engineer</p>
            <p className='font-bold text-[12px] lg:text-[1.25rem] text-[#59595B] ' >Remote</p>
            <p id='about' className='font-bold text-[12px] lg:text-[1.25rem] text-[#424245] mt-[1rem] ' >About Catch Up</p> 
            <p className='font-normal text-[12px] lg:text-[1rem] text-[#59595B] ' >
                Catch Up is a new platform whose mission is to help people establish and maintain better relationships with those who matter most, and we are looking for the best and right people that can help us accomplish this. We value unique contributions, embrace diversity in people and ideas and welcome everyone. We’re a fully distributed, remote-first, fast-growing startup. Our engineering team is spread from UTC-8 to UTC+6 and we rely heavily on our written communication skills in order to make it work. We believe in giving our engineers agency and control over their schedules: we avoid standing meetings, and default to asynchronous communication. There are no core working hours, we just ask our team to communicate clearly about their schedules and be considerate to their coworkers if plans change. You will occasionally need to be flexible in order to meet synchronously with colleagues in different time zones.
            </p>
             <p id='role' className='font-bold text-[12px] lg:text-[1.25rem] text-[#424245] mt-[1rem] ' >The Role</p> 
            <p className='font-normal text-[12px] lg:text-[1rem] text-[#59595B] ' >
                This is a full-time, fully-remote position as a Senior Backend Engineer. While we're very much still a startup in the sense that you may be asked to help with a variety of problems, in this role you can expect to spend most of your time working on the code and systems that power Catch Up.
                <ul className='list-disc'>
                    <li>You'll work closely with the Product, Data Science, and Finance teams and write code needed to power financial products for our customers.</li>
                    <li>Beyond specific product/application-related tasks, you will design and improve new tooling and systems as needed to support our application's needs.</li>
                    <li>Revenue as a tradable asset is fundamentally a new problem -- you'll develop familiarity with our business and help us explore the solution space. Ideas come from everywhere in our company; as a backend engineer, you will have a unique perspective on what kind of products are feasible and valuable.
</li>
                    <li>As an early team member, you will contribute significantly to our team culture.
</li>
                    <li>As a Senior engineer, we expect you to make the team better by writing code, but also by doing architecture work, mentoring other engineers, and generally improving the status quo.
</li>
                </ul>


            </p>
             <p id='stack' className='font-bold text-[12px] lg:text-[1.25rem] text-[#424245] mt-[1rem] ' >Tech Stack</p> 
             <p className='font-normal text-[12px] lg:text-[1rem] text-[#59595B] ' >
                We are committed to using the right tools for the problems we are trying to solve. We are not dogmatic, but currently our stack is mostly comprised of:
                <ul className='list-disc' >
                    <li>Frontend: Typescript, React, Next.js.</li>
                    <li>Backend: Go, PostgreSQL, Pyspark, BigQuery, Kubernetes, Pulumi, Buildkite, Google Cloud Platform,</li>
                </ul>
You do not need to have prior experience with any of these technologies, most of us have learned them on the job. We believe great candidates are capable of learning new tools and we provide mentorship and guidance as needed.
<br/>We try to adopt tools that are a delight to use, and that help us be productive. We have a strong focus on always maintaining and improving developer productivity. We experiment frequently, but pragmatically, with new technology.
             </p>
             <p id='qualifications' className='font-bold text-[12px] lg:text-[1.25rem] text-[#424245] mt-[1rem] ' >Qualifications</p> 
             <p className='font-normal text-[12px] lg:text-[1rem] text-[#59595B] ' >
                We are looking for talented engineers with some experience in a similar role. Specifically related to Backend Engineering:
              <ul className='list-disc'>
                <li>You are experienced with web backends, databases, ETL pipelines and/or developer tools.
</li>
                <li>You have built, deployed, and maintained real systems in the real world.
</li>
                <li>You have significant previous experience as a team or project lead.
</li>
 In general, to be an engineer at Catch Up:
                <li>You want to join a quickly growing startup and make an impact.</li>
                <li>You want to be part of an engineering team that holds each other to high standards.
</li>
                <li>You want to make things better for yourself and others.
</li>
                <li>You have a good sense of engineering fundamentals, and are passionate about building high quality software.
</li>
                <li>You take end-to-end ownership of your work and are comfortable making code changes across the stack when needed.
</li>
                <li>You can collaborate with non-engineering stakeholders to unblock yourself and make sure you're building the right thing.
</li>
                <li>You put users first and empathize with how they'll use Pipe. Your work reflects this.
</li>
                <li>You're interested in finance and helping companies unlock new, more sustainable sources of capital.
</li>
                <li>You have strong written and verbal communication skills.
</li>

              </ul>
You want to work in an environment that recognizes excellence.
Importantly, we do not care for any specific length or tenure of experience. You do not need to have a specific title or certificate or degree. You do not need to live in a certain location. We believe talent comes from anywhere, regardless of background. If you believe you are a good fit for this job, we would like to hear from you. Pipe is an equal opportunity employer: we do not discriminate. Inclusion is important to us and we hope it is to you, too.

             </p>
            <p id='benefits' className='font-bold text-[12px] lg:text-[1.25rem] text-[#424245] mt-[1rem] ' >Compensation and Benefits</p> 
             <p className='font-normal text-[12px] lg:text-[1rem] text-[#59595B] ' >
                <ul className='list-disc lg:list-disc'>
                    <li> We want you to feel like an owner and that should be reflected in your salary and equity.
</li>
                    <li>The best equipment: if you want it, and it helps you do your job, we'll provide it. Computers, monitors, desks, chairs, headphones, speakers, microphones, webcams, keyboards, mice, etc.</li>
                    <li>A good work-life balance: we do our best work when we regularly can step away from it and live our lives.
</li>
                    <li>Flexible vacation and work hours. We don't adopt conventional work practices that are meaningless for the type of work we do.
</li>
                    <li>Parental leave for anyone who is growing their family, regardless of gender.
</li>
                    <li>Very good health, dental, and vision insurance.
</li>
                    <li>Great colleagues: we value a culture of authenticity, humility, and excellence. We want you to make a footprint on our culture.
</li>              
                </ul>
            </p>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default JobDetails