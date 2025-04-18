
import { Shield, Clock, CheckCircle2, MousePointerClick } from "lucide-react";

export function FeaturesSection() {
  return (
    <div className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Book Your Perfect Accommodation</h2>
        <p className="text-gray-600 mb-12 text-center">
          Take the hassle out of securing your student home for the best years of your life
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-4">
              <MousePointerClick className="h-8 w-8 text-amber-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Instant & Easy Bookings</h3>
            <p className="text-gray-600 text-sm">
              Time is money. Save both when you book with us.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-4">
              <CheckCircle2 className="h-8 w-8 text-amber-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Lowest Price Guarantee</h3>
            <p className="text-gray-600 text-sm">
              Find a lower price and we'll match it. No questions asked.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-amber-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">24x7 Assistance</h3>
            <p className="text-gray-600 text-sm">
              If you have a doubt or a query, we're always a call away.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-amber-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">100% Verified Listings</h3>
            <p className="text-gray-600 text-sm">
              We promise to deliver what you see on the website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
