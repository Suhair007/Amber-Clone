
export function PartnersSection() {
  return (
    <div className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">We Have The Best Partners</h2>
        
        {/* University Partners Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mb-16">
          <div className="grayscale hover:grayscale-0 transition-all">
            <img
              src="https://seekvectors.com/files/download/Birmingham%20University-04.png"
              alt="University of Birmingham"
              className="h-10 md:h-12"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all">
            <img
              src="https://1000logos.net/wp-content/uploads/2017/02/Harvard-Logo.png"
              alt="Harvard University"
              className="h-10 md:h-12"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all">
            <img
              src="https://www.canamgroup.com/assets/universitylogos/1739966396-az-james-cook-university-logo.png"
              alt="James Cook University"
              className="h-10 md:h-12"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all">
            <img
              src="https://www.interfolio.com/wp-content/uploads/ucl-logo-1.png"
              alt="University College London"
              className="h-10 md:h-12"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all">
            <img
              src="https://media.licdn.com/dms/image/v2/D5622AQH6zk5EaMvo4Q/feedshare-shrink_800/feedshare-shrink_800/0/1719018860202?e=2147483647&v=beta&t=ELcLNCldKzUjjHqSGYu2pxzQ99iPhrBCrmnOEZ-wp5k"
              alt="NY College of Dentistry"
              className="h-10 md:h-12"
            />
          </div>
        </div>
        
        {/* Partnership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Partner With Us Card */}
          <div className="bg-blue-50 rounded-xl overflow-hidden">
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Partner With Us</h3>
                <p className="text-gray-700 mb-6">
                  At amber, we offer seamless booking process and a robust sales support.
                </p>
                <button className="px-6 py-2 bg-white rounded border border-gray-300 text-gray-800 hover:bg-gray-50">
                  Partner With Us
                </button>
              </div>
              <div className="flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1551909966-fd3ca6d5c6cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="Partnership"
                  className="w-full md:w-48 h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
          
          {/* List With Us Card */}
          <div className="bg-amber-50 rounded-xl overflow-hidden">
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">List With Us</h3>
                <p className="text-gray-700 mb-6">
                  List your properties efficiently with amber.
                </p>
                <button className="px-6 py-2 bg-white rounded border border-gray-300 text-gray-800 hover:bg-gray-50">
                  List Properties
                </button>
              </div>
              <div className="flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="List Properties"
                  className="w-full md:w-48 h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
