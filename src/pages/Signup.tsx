import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { UserRole } from '../context/AppContext';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>(null);
  const { setCurrentUser } = useApp();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && password && role) {
      setCurrentUser({ name, email, role });
      switch (role) {
        case 'creator':
          navigate('/creator-dashboard');
          break;
        case 'developer':
          navigate('/developer-dashboard');
          break;
        case 'investor':
          navigate('/investor-dashboard');
          break;
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-16">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-[#0F3D73] mb-6 text-center">Sign Up</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent"
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Your Role
              </label>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="creator"
                    checked={role === 'creator'}
                    onChange={(e) => setRole(e.target.value as UserRole)}
                    className="w-4 h-4 text-[#1A73E8]"
                  />
                  <span className="text-gray-700">Creator - Submit innovative ideas</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="developer"
                    checked={role === 'developer'}
                    onChange={(e) => setRole(e.target.value as UserRole)}
                    className="w-4 h-4 text-[#1A73E8]"
                  />
                  <span className="text-gray-700">Developer - Build solutions</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="investor"
                    checked={role === 'investor'}
                    onChange={(e) => setRole(e.target.value as UserRole)}
                    className="w-4 h-4 text-[#1A73E8]"
                  />
                  <span className="text-gray-700">Investor - Fund projects</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1A73E8] text-white py-3 rounded-lg font-semibold hover:bg-[#0F3D73] transition"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
