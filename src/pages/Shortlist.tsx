
import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ArrowLeft } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";


const mockProperties = [
  {
    id: 1,
    name: "Creek Court",
    location: "London, GB",
    price: 239,
    rating: 5.0,
    reviewCount: 3,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    id: 2,
    name: "Chapter Kings Cross",
    location: "London, England, GB",
    price: 298,
    rating: 4.7,
    reviewCount: 10,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  }
];

const Shortlist = () => {
  const { user } = useAuth();
  const [shortlist, setShortlist] = useState(mockProperties);
  
  const removeFromShortlist = (id: number) => {
    setShortlist(shortlist.filter(property => property.id !== id));
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8 md:py-12">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-amber-500 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to home
          </Link>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Your Shortlist</h1>
          <p className="text-gray-600 mb-8">
            {user ? `Properties saved by ${user.name}` : 'Properties you have saved'}
          </p>
          
          {shortlist.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-amber-50 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-amber-500" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Your shortlist is empty</h2>
              <p className="text-gray-600 mb-6">
                You haven't added any properties to your shortlist yet.
              </p>
              <Button asChild>
                <Link to="/">Browse Properties</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shortlist.map((property) => (
                <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow">
                  {/* Property Image with Remove button */}
                  <div className="relative">
                    <img 
                      src={property.image} 
                      alt={property.name} 
                      className="w-full h-48 object-cover"
                    />
                    <button 
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                      onClick={() => removeFromShortlist(property.id)}
                    >
                      <Heart className="h-5 w-5 text-rose-600 fill-rose-600" />
                    </button>
                  </div>
                  
                  {/* Property Details */}
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">{property.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{property.location}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline">
                        <span className="text-gray-500 text-sm">From</span>
                        <span className="font-bold text-lg ml-1">£{property.price}</span>
                        <span className="text-gray-500 text-sm ml-1">/ week</span>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg 
                              key={star} 
                              className={`h-4 w-4 ${star <= Math.floor(property.rating) ? 'text-amber-400' : 'text-gray-300'}`} 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">({property.reviewCount})</span>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Button className="w-full">View Details</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shortlist;
