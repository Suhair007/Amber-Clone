
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowLeft, User, Mail, Lock, AlertCircle } from "lucide-react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const { signup } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }
    
    try {
      const success = await signup(name, email, password);
      
      if (success) {
        navigate("/");
      } else {
        setError("Email already in use");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    }
    
    setIsLoading(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-600 hover:text-amber-500 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to home
            </Link>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold mb-2">Create an account</h1>
                <p className="text-gray-600">Join amber and find your perfect student home</p>
              </div>
              
              {error && (
                <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-lg flex items-start">
                  <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700">Full Name</Label>
                    <div className="relative mt-1">
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="pl-10"
                      />
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-700">Email</Label>
                    <div className="relative mt-1">
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                      />
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="password" className="text-gray-700">Password</Label>
                    <div className="relative mt-1">
                      <Input
                        id="password"
                        type="password"
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10"
                      />
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="confirmPassword" className="text-gray-700">Confirm Password</Label>
                    <div className="relative mt-1">
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="pl-10"
                      />
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </div>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link to="/login" className="text-amber-600 hover:text-amber-700 font-medium">
                    Sign in
                  </Link>
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-center text-sm text-gray-500">
                  By signing up, you agree to our{" "}
                  <Link to="/terms" className="text-amber-600 hover:text-amber-700">
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-amber-600 hover:text-amber-700">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
