
import { Bed, GraduationCap, Globe } from "lucide-react";

export function StatsSection() {
  return (
    <div className="bg-white py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1M+ Beds */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center justify-center mb-4">
              <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center">
                <Bed className="h-6 w-6 text-amber-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">1M+ Beds</h3>
            <p className="text-gray-600">
              Book your perfect place from an extensive list of options.
            </p>
          </div>
          
          {/* 800+ Universities */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center justify-center mb-4">
              <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-amber-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">800+ Universities</h3>
            <p className="text-gray-600">
              Find the best student homes near prestigious universities.
            </p>
          </div>
          
          {/* 250+ Global Cities */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center justify-center mb-4">
              <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center">
                <Globe className="h-6 w-6 text-amber-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">250+ Global Cities</h3>
            <p className="text-gray-600">
              We operate in major cities around the world.
            </p>
          </div>
        </div>
        
        {/* Trustpilot */}
        <div className="flex justify-center md:justify-end mt-10">
          <div className="flex items-center">
            <span className="text-green-500 mr-1 font-bold">Trustpilot</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <svg key={index} className={`h-5 w-5 ${index < 4.5 ? 'text-green-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-1">TrustScore 4.6/5 (6,241 reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
