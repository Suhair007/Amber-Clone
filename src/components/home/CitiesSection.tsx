
export function CitiesSection() {
  // Popular cities
  const cities = [
    "London", "Glasgow", "Coventry", "Birmingham", "Nottingham", 
    "Sheffield", "Manchester", "Edinburgh", "Leicester", "Cardiff",
    "Leeds", "Newcastle", "Aberdeen", "Portsmouth", "Cambridge",
    "Oxford", "Southampton", "Exeter", "Bournemouth", "Belfast",
    "Bristol", "Canterbury", "Dublin", "Swansea", "Loughborough",
    "Brighton", "Derby", "Hatfield", "Lincoln", "Luton",
    "Plymouth", "Dallas", "Cork", "Melbourne", "Sydney"
  ];

  return (
    <div className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Hundreds Of Cities Around The World</h2>
        
        <div className="flex flex-wrap gap-y-2">
          {cities.map((city) => (
            <a
              key={city}
              href={`/city/${city.toLowerCase()}`}
              className="mr-4 mb-2 text-gray-700 hover:text-amber-500 hover:underline"
            >
              {city}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
