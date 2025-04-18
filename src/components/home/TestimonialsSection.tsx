
export function TestimonialsSection() {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      content: "Amber's exceptional help amid computer errors ensured I got the right accommodation. Thanks for the great service and dedication.",
      name: "Aqeel Hussain",
      university: "Birmingham City University",
      flag: "🇬🇧"
    },
    {
      id: 2,
      content: "It's 100% genuine and the agent helped us out a alot. We booked a standard 2-bed apartment in palamon court Canterbury.",
      name: "Mohammed",
      university: "University Of Kent",
      flag: "🇺🇸"
    },
    {
      id: 3,
      content: "My agent was very helpful at finding accommodation within my budget and on short notice. 5 stars.",
      name: "Lawrence",
      university: "University Of Liverpool",
      flag: "🇬🇧"
    }
  ];

  return (
    <div className="bg-green-50 py-14">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Trust of 1 Million+ students</h2>
          <div className="flex items-center">
            <span className="px-3 py-1 bg-white rounded text-green-600 text-sm">6.2K</span>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg p-6 shadow">
              <p className="text-gray-700 mb-4">
                {testimonial.content}
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-xl">
                    {testimonial.flag}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.university}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
