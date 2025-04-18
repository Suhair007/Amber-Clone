
import { MessageCircle, Mail, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <div className="py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Need help? Let's connect</h2>
        <p className="text-gray-600 mb-10">
          If you have any queries, feel free to contact us
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Live Chat */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <MessageCircle className="h-4 w-4 text-green-600" />
              </div>
              <div className="bg-green-100 rounded-full px-2 py-0.5">
                <span className="text-xs text-green-600">2 Mins Reply</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
            <button className="w-full px-4 py-2 mt-4 border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
              Chat Now
            </button>
          </div>
          
          {/* Email */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow transition-shadow">
            <div className="mb-4">
              <Mail className="h-8 w-8 text-amber-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <button className="w-full px-4 py-2 mt-4 border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
              Send Email
            </button>
          </div>
          
          {/* Phone */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <Phone className="h-4 w-4 text-blue-600" />
              </div>
              <div className="bg-blue-100 rounded-full px-2 py-0.5">
                <span className="text-xs text-blue-600">2 Mins Reply</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">+91 8035735724</h3>
            <button className="w-full px-4 py-2 mt-4 border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
              Call Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
