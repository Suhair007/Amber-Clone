
export function BookingSteps() {
  return (
    <div className="py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Book Your Place In 3 Easy Steps</h2>
        <p className="text-gray-600 mb-12">
          Book places in major cities and universities across the globe
        </p>
        
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200">
            <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gray-300"></div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center mb-8 md:mb-0 md:w-1/3">
              <div className="relative flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border-2 border-gray-200 text-lg font-bold z-10">
                  1
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm w-full md:max-w-xs">
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Discover and Finalise</h3>
                <p className="text-gray-600 text-sm">
                  Choose from a plethora of verified student home listings
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center mb-8 md:mb-0 md:w-1/3">
              <div className="relative flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border-2 border-gray-200 text-lg font-bold z-10">
                  2
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm w-full md:max-w-xs">
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Get your paperwork done</h3>
                <p className="text-gray-600 text-sm">
                  Paperwork's on us, no need to fuss.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center md:w-1/3">
              <div className="relative flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border-2 border-gray-200 text-lg font-bold z-10">
                  3
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm w-full md:max-w-xs">
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Arrive and Enjoy</h3>
                <p className="text-gray-600 text-sm">
                  Relax in your new home, while we take care of the rest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
