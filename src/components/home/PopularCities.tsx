
export function PopularCities() {
  // Countries with their flags
  const countries = [
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "Ireland", flag: "🇮🇪" },
    { name: "United States", flag: "🇺🇸" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "Spain", flag: "🇪🇸" }
  ];

  // Cities with images
  const cities = [
    {
      name: "London",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      country: "United Kingdom"
    },
    {
      name: "Leicester",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr5-VlQkXkAiB-CBErZM8eqHOtMxTP4okUeQ&s",
      country: "United Kingdom"
    },
    {
      name: "Liverpool",
      image: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      country: "United Kingdom"
    },
    {
      name: "Sheffield",
      image: "https://dyn.eu.mktgcdn.com/f/100004519/1zQ1xaIWwl0j9YByWMiiG1-cgXRhW2iI7XpCtHWwGP4.jpg/width=500,height=500",
      country: "United Kingdom"
    },
    {
      name: "Birmingham",
      image: "https://blog.sothebysrealty.co.uk/hubfs/Birmingham-jpg-1.jpeg",
      country: "United Kingdom"
    },
    {
      name: "Nottingham",
      image: "https://static.geoplace.co.uk/uploads/case-studies/Nottingham-Council-1200pxw.jpg",
      country: "United Kingdom"
    },
    {
      name: "Coventry",
      image: "https://www.current-news.co.uk/wp-content/uploads/2023/09/Image-of-Coventry-Image-Flickr.jpg",
      country: "United Kingdom"
    },
    {
      name: "Leeds",
      image: "https://www.martinco.com/wp-content/uploads/2024/04/Untitled-design-35.jpg",
      country: "United Kingdom"
    }
  ];

  return (
    <div className="bg-gray-50 py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Popular Cities Across The Globe</h2>
        <p className="text-gray-600 mb-8">Book student accommodations near top cities and universities around the world.</p>
        
        {/* Country Selection */}
        <div className="flex flex-wrap gap-2 mb-8">
          {countries.map((country) => (
            <button
              key={country.name}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-white hover:bg-gray-50"
            >
              <span className="text-lg">{country.flag}</span>
              <span className="text-sm">{country.name}</span>
            </button>
          ))}
        </div>
        
        {/* City Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((city) => (
            <a 
              key={city.name}
              href={`#${city.name.toLowerCase()}`}
              className="group relative rounded-lg overflow-hidden h-48 cursor-pointer"
            >
              <img 
                src={city.image} 
                alt={city.name} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-bold text-white">{city.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
