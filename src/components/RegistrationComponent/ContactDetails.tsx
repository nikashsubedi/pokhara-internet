import Button from "./components/Button";
const ContactDetails = () => {
  return (
    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Registration Form</title>
  {}
  <div className="bg-white jcc shadow-2xl rounded-3xl w-full max-w-4xl overflow-hidden">
    <div className="grid md:grid-cols-4 border-b border-cyan-200">
      <div className="p-6 border-r border-cyan-200 text-center relative">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-lg relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
        <h3 className="text-sm font-semibold text-cyan-700">Personal Information</h3>
      </div>
      <div className="p-6 border-r border-cyan-200 text-center relative opacity-50">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-cyan-300 text-white flex items-center justify-center font-bold text-lg relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
        </div>
        <h3 className="text-sm font-semibold text-cyan-700">Contact Details</h3>
      </div>
      <div className="p-6 border-r border-cyan-200 text-center relative opacity-50">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-cyan-300 text-white flex items-center justify-center font-bold text-lg relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>
        <h3 className="text-sm font-semibold text-cyan-700">Address</h3>
      </div>
      <div className="p-6 text-center relative opacity-50">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-cyan-300 text-white flex items-center justify-center font-bold text-lg relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <h3 className="text-sm font-semibold text-cyan-700">Confirmation</h3>
      </div>
    </div>
    <div className="p-12">
      <h2 className="text-3xl font-bold mb-8 text-cyan-800">Personal Information</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-3 text-sm font-medium text-cyan-700">First Name</label>
          <div className="relative">
            <input type="text" placeholder="John" className="w-full px-4 py-3 border-2 border-cyan-500 rounded-xl bg-transparent 
                      focus:outline-none focus:ring-2 focus:ring-cyan-500 pl-10" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-500 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
        <div>
          <label className="block mb-3 text-sm font-medium text-cyan-700">Last Name</label>
          <div className="relative">
            <input type="text" placeholder="Doe" className="w-full px-4 py-3 border-2 border-cyan-500 rounded-xl bg-transparent 
                      focus:outline-none focus:ring-2 focus:ring-cyan-500 pl-10" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-500 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="block mb-3 text-sm font-medium text-cyan-700">Email Address</label>
          <div className="relative">
            <input type="email" placeholder="john.doe@example.com" className="w-full px-4 py-3 border-2 border-cyan-500 rounded-xl bg-transparent 
                      focus:outline-none focus:ring-2 focus:ring-cyan-500 pl-10" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-500 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-10">
        <p className="text-sm text-cyan-600">Step 2 of 4</p>
        <a href="#LinkToNextButton">
          {/* <button className="px-8 py-3 bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 
              transition-colors flex items-center">
            Continue
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button> */}
           <Button label="Contact" onClick={() => console.log("Contact clicked")} variant="primary" />
        </a>
      </div>
    </div>
  </div>
</div>
  )
}

export default ContactDetails