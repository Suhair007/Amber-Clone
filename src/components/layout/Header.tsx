import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown, Menu, Heart, Download, Headphones } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useAuth } from "@/contexts/AuthContext";

export function Header() {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAtTop = useScrollPosition();
  
  return (
    <header className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
      isAtTop ? 'bg-transparent' : 'bg-white/95 backdrop-blur-md border-b border-gray-200'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc76C0_Rm63Q99uQ6oCCYNYVSOCJaifgOffw&s"
              alt="AmberStudent Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Button variant="ghost" size="sm" asChild>
              <Link to="#" className="flex items-center gap-2 text-gray-600">
                <Download className="h-4 w-4" />
                <span>Download App</span>
              </Link>
            </Button>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center gap-2 text-gray-600">
                    <Headphones className="h-4 w-4" />
                    <span>Support</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-48">
                      <Link to="#" className="block px-2 py-2 hover:bg-gray-100 rounded-md">Help Center</Link>
                      <Link to="#" className="block px-2 py-2 hover:bg-gray-100 rounded-md">Live Chat</Link>
                      <Link to="#" className="block px-2 py-2 hover:bg-gray-100 rounded-md">Contact Us</Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button variant="ghost" size="sm" asChild>
              <Link to="/shortlist" className="flex items-center gap-2 text-gray-600">
                <Heart className="h-4 w-4" />
                <span>Shortlist</span>
              </Link>
            </Button>
            
            {user ? (
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-gray-600">{user.name}</span>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </Button>
              </div>
            ) : (
              <Button variant="outline" size="sm" asChild>
                <Link to="/login" className="text-gray-600">Login</Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-2">
            <Link 
              to="#" 
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <Download className="h-4 w-4" />
              <span>Download App</span>
            </Link>
            <Link 
              to="#" 
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <Headphones className="h-4 w-4" />
              <span>Support</span>
            </Link>
            <Link 
              to="/shortlist" 
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <Heart className="h-4 w-4" />
              <span>Shortlist</span>
            </Link>
            
            {user ? (
              <>
                <div className="flex items-center gap-2 px-3 py-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-gray-600">{user.name}</span>
                </div>
              </>
            ) : (
              <Link 
                to="/login" 
                className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
              >
                Login
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
