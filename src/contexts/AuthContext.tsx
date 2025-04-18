
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define the user type
type User = {
  id: string;
  name: string;
  email: string;
};

// Define the auth context type
type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
};

// Create the auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth context provider props
type AuthProviderProps = {
  children: ReactNode;
};

// Auth context provider
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("amber-user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Get users from local storage
      const usersString = localStorage.getItem("amber-users") || "[]";
      const users = JSON.parse(usersString);
      
      // Find user with matching email and password
      const foundUser = users.find(
        (u: any) => u.email === email && u.password === password
      );
      
      if (foundUser) {
        // Create a user object without password
        const loggedInUser = {
          id: foundUser.id,
          name: foundUser.name,
          email: foundUser.email,
        };
        
        // Save to local storage and state
        localStorage.setItem("amber-user", JSON.stringify(loggedInUser));
        setUser(loggedInUser);
        setIsLoading(false);
        return true;
      }
      
      setIsLoading(false);
      return false;
    } catch (error) {
      console.error("Login error:", error);
      setIsLoading(false);
      return false;
    }
  };

  // Signup function
  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Get existing users from local storage
      const usersString = localStorage.getItem("amber-users") || "[]";
      const users = JSON.parse(usersString);
      
      // Check if user already exists
      if (users.some((u: any) => u.email === email)) {
        setIsLoading(false);
        return false;
      }
      
      // Create new user
      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password,
      };
      
      // Add to users array and save to local storage
      users.push(newUser);
      localStorage.setItem("amber-users", JSON.stringify(users));
      
      // Log in the user
      const loggedInUser = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      };
      
      localStorage.setItem("amber-user", JSON.stringify(loggedInUser));
      setUser(loggedInUser);
      setIsLoading(false);
      return true;
    } catch (error) {
      console.error("Signup error:", error);
      setIsLoading(false);
      return false;
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("amber-user");
    setUser(null);
  };

  const value = {
    user,
    login,
    signup,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
