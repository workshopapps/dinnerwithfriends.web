export const HowItWorksForm = () => {
    return (
      <div className="w-[87%] my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 max-w-screen-xl mx-auto">
        <div className="md:col-span-3">
          <h4 className="text-[#1070ff] text-[1.5rem] md:text-[3.75rem]">Still have questions?</h4>
          <p className="my-4 md:w-4/5">
            Send us any questions you may have about CatchUp and we will get
            back to you as soon as possible.
          </p>
        </div>
        <form action="" className="md:col-span-2 w-full grid grid-cols-2 gap-x-5 gap-y-4">
          <input className="px-3 py-2 focus:outline-gray-800 border border-gray-300 rounded-md w-full" type="text" placeholder="Firstname" />
          <input className="px-3 py-2 focus:outline-gray-800 border border-gray-300 rounded-md w-full" type="text" placeholder="Lastname" />
          <input className="px-3 py-2 focus:outline-gray-800 col-span-2 border border-gray-300 rounded-md w-full" type="email" placeholder="Email" />
          <textarea className="px-3 py-2 focus:outline-gray-800 col-span-2 border border-gray-300 rounded-md w-full" name="" id="" cols="30" rows="10" placeholder="Enter a description..."></textarea>
          <button className="col-span-2 bg-[#1070ff] text-white px-4 py-2 rounded-md">Send</button>
        </form>
      </div>
    )
}
