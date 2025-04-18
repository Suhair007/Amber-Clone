
import { Heart } from "lucide-react";

export function PropertiesSection() {
  // Sample properties data
  const properties = [
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
    },
    {
      id: 3,
      name: "Chapter Old Street",
      location: "London, England, GB",
      price: 302,
      rating: 5.0,
      reviewCount: 4,
      image: "https://images.unsplash.com/photo-1560067174-c5a3a8f37060?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 4,
      name: "IQ Sterling Court",
      location: "London, England, GB",
      price: 279,
      rating: 4.8,
      reviewCount: 6,
      special: "Save up to £500",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }
  ];

  // List of cities for the buttons
  const cities = [
    "London", "Birmingham", "Edinburgh", "Bangor", "Manchester", 
    "Nottingham", "Leeds", "Coventry", "Bristol"
  ];

  return (
    <div className="py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Thousands Of Properties Globally</h2>
        <p className="text-gray-600 mb-8">From studios to private rooms to shared apartments, we've got it all.</p>
        
        {/* City buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {cities.map((city, index) => (
            <button
              key={city}
              className={`px-4 py-2 text-sm rounded-full ${
                index === 0 
                  ? 'bg-amber-500 text-white' 
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
        
        {/* Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow">
              {/* Property Image with Wishlist */}
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.name} 
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
                {property.special && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-amber-500 text-white text-xs px-3 py-1 rounded-full">
                      {property.special}
                    </span>
                  </div>
                )}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
