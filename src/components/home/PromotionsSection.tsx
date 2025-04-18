
import { Button } from "@/components/ui/button";

export function PromotionsSection() {
  return (
    <div className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Amber Referral Program And Offers</h2>
        <p className="text-gray-600 mb-8">Several promotions, deals and special offers crafted just for you.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Referral Promotion */}
          <div className="bg-amber-50 rounded-xl overflow-hidden">
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="max-w-sm">
                <h3 className="text-xl font-bold mb-2">Win £50 in just a few steps!</h3>
                <h4 className="text-lg font-medium mb-4">Refer a friend and earn your reward</h4>
                <p className="text-gray-700 text-sm mb-2">Turn connections into rewards.</p>
                <p className="text-gray-700 text-sm mb-6">Get credited after successful booking.</p>
                <Button className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8">
                  Refer Now
                </Button>
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=974&q=80" 
                  alt="Students" 
                  className="w-full md:w-64 h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Scholarship Promotion */}
          <div className="bg-pink-50 rounded-xl overflow-hidden">
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="max-w-sm">
                <h3 className="text-xl font-bold mb-2">Amberscholar 2025 Edition is Here!</h3>
                <p className="text-gray-700 text-sm mb-6">
                  Win upto $12,000 & study in the UK, USA, Canada, or Ireland.
                </p>
                <Button className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-8">
                  Apply Now
                </Button>
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                  alt="Scholarship" 
                  className="w-full md:w-64 h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
