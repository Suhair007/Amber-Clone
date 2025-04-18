import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HeroBanner() {
  return (
    <div className="relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7')",
          filter: "brightness(0.5)"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-28 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Home away from home</h1>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
          Book student accommodations near top universities and cities across the globe
        </p>
        
        {/* Features Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm md:text-base">Verified Properties</span>
          </div>
          
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm md:text-base">24x7 Assistance</span>
          </div>
          
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707L15.707 4a1 1 0 01-1.414 1.414L13 4.121l-.707.707a1 1 0 01-1.414-1.414l.707-.707 1.414-1.414zM17 11a1 1 0 01.707.293l.707.707L19.707 13a1 1 0 01-1.414 1.414L17 13.121l-.707.707a1 1 0 01-1.414-1.414l.707-.707 1.414-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm md:text-base">Lowest Price Guarantee</span>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Input 
              className="w-full h-14 pl-12 pr-4 rounded-full bg-white text-gray-800 placeholder-gray-500 shadow-lg" 
              placeholder="Search by City, University or Property" 
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <Button 
                type="button" 
                className="bg-amber-500 hover:bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
