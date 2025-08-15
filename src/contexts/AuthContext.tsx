import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, phone: string, password: string) => Promise<string>;
  verifyOTP: (userId: string, otp: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Configure axios defaults
axios.defaults.timeout = 15000; // 15 second timeout
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Add request interceptor for debugging
axios.interceptors.request.use(
  (config) => {
    console.log('🔄 API Request:', {
      method: config.method?.toUpperCase(),
      url: config.url,
      data: config.data
    });
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
axios.interceptors.response.use(
  (response) => {
    console.log('✅ API Response:', {
      status: response.status,
      data: response.data
    });
    return response;
  },
  (error) => {
    console.error('❌ API Error:', {
      status: error.response?.status,
      message: error.response?.data?.message || error.message,
      url: error.config?.url
    });
    return Promise.reject(error);
  }
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // Try to get user data from localStorage
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser));
        } catch (error) {
          console.error('Error parsing saved user:', error);
          localStorage.removeItem('user');
        }
      }
    }
  }, [token]);

  const register = async (name: string, email: string, phone: string, password: string): Promise<string> => {
    try {
      setLoading(true);
      console.log('🔄 Starting registration process...');
      
      // First, test if the server is reachable
      try {
        await axios.get(`${API_URL}/api/health`);
        console.log('✅ Server is reachable');
      } catch (healthError) {
        console.error('❌ Server health check failed:', healthError);
        toast.error('Unable to connect to server. Please make sure the server is running.');
        throw new Error('Server not reachable');
      }
      
      const response = await axios.post(`${API_URL}/api/auth/register`, {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        password
      });
      
      if (response.data.success) {
        toast.success('Registration successful! Please check the console for your OTP.');
        return response.data.userId;
      } else {
        throw new Error(response.data.message || 'Registration failed');
      }
    } catch (error: any) {
      console.error('❌ Registration error:', error);
      
      let message = 'Registration failed. Please try again.';
      
      if (error.response?.data?.message) {
        message = error.response.data.message;
      } else if (error.message === 'Server not reachable') {
        message = 'Cannot connect to server. Please ensure the backend is running.';
      } else if (error.code === 'ECONNREFUSED') {
        message = 'Connection refused. Please start the backend server.';
      } else if (error.code === 'NETWORK_ERROR') {
        message = 'Network error. Please check your connection.';
      }
      
      toast.error(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async (userId: string, otp: string): Promise<boolean> => {
    try {
      setLoading(true);
      console.log('🔄 Verifying OTP...');
      
      const response = await axios.post(`${API_URL}/api/auth/verify-otp`, {
        userId,
        otp: otp.trim()
      });

      if (response.data.success) {
        const { token: newToken, user: userData } = response.data;
        setToken(newToken);
        setUser(userData);
        localStorage.setItem('token', newToken);
        localStorage.setItem('user', JSON.stringify(userData));
        axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        
        toast.success('Phone verified successfully!');
        return true;
      } else {
        throw new Error(response.data.message || 'OTP verification failed');
      }
    } catch (error: any) {
      console.error('❌ OTP verification error:', error);
      const message = error.response?.data?.message || 'OTP verification failed';
      toast.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setLoading(true);
      console.log('🔄 Starting login process...');
      
      // Test server connectivity
      try {
        await axios.get(`${API_URL}/api/health`);
        console.log('✅ Server is reachable');
      } catch (healthError) {
        console.error('❌ Server health check failed:', healthError);
        toast.error('Unable to connect to server. Please make sure the server is running.');
        throw new Error('Server not reachable');
      }
      
      const response = await axios.post(`${API_URL}/api/auth/login`, {
        email: email.trim().toLowerCase(),
        password
      });

      if (response.data.success) {
        const { token: newToken, user: userData } = response.data;
        setToken(newToken);
        setUser(userData);
        localStorage.setItem('token', newToken);
        localStorage.setItem('user', JSON.stringify(userData));
        axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        
        toast.success('Login successful!');
        return true;
      } else {
        throw new Error(response.data.message || 'Login failed');
      }
    } catch (error: any) {
      console.error('❌ Login error:', error);
      
      let message = 'Login failed. Please try again.';
      
      if (error.response?.data?.message) {
        message = error.response.data.message;
      } else if (error.message === 'Server not reachable') {
        message = 'Cannot connect to server. Please ensure the backend is running.';
      } else if (error.code === 'ECONNREFUSED') {
        message = 'Connection refused. Please start the backend server.';
      } else if (error.code === 'NETWORK_ERROR') {
        message = 'Network error. Please check your connection.';
      }
      
      toast.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    delete axios.defaults.headers.common['Authorization'];
    toast.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider value={{
      user,
      token,
      login,
      register,
      verifyOTP,
      logout,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};