import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Plus, X } from 'lucide-react';

const sdgOptions = [
  '1. No Poverty',
  '2. Zero Hunger',
  '3. Good Health and Well-being',
  '4. Quality Education',
  '5. Gender Equality',
  '6. Clean Water and Sanitation',
  '7. Affordable and Clean Energy',
  '8. Decent Work and Economic Growth',
  '9. Industry, Innovation and Infrastructure',
  '10. Reduced Inequalities',
  '11. Sustainable Cities and Communities',
  '12. Responsible Consumption and Production',
  '13. Climate Action',
  '14. Life Below Water',
  '15. Life on Land',
  '16. Peace, Justice and Strong Institutions',
  '17. Partnerships for the Goals',
];

const CreatorDashboard = () => {
  const { currentUser, ideas, addIdea } = useApp();
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [sdg, setSdg] = useState('');
  const [budget, setBudget] = useState('');

  const myIdeas = ideas.filter((idea) => idea.creatorName === currentUser?.name);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description && sdg && budget && currentUser) {
      addIdea({
        title,
        description,
        sdg,
        budget: Number(budget),
        creatorName: currentUser.name,
      });
      setTitle('');
      setDescription('');
      setSdg('');
      setBudget('');
      setShowForm(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#0F3D73]">Creator Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {currentUser?.name}!</p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="mb-6 bg-[#1A73E8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0F3D73] transition flex items-center space-x-2"
        >
          {showForm ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          <span>{showForm ? 'Cancel' : 'Submit New Idea'}</span>
        </button>

        {showForm && (
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#0F3D73] mb-6">Submit New Idea</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Idea Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent"
                  placeholder="Enter your idea title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent"
                  placeholder="Describe your idea in detail"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SDG Category
                </label>
                <select
                  value={sdg}
                  onChange={(e) => setSdg(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent"
                  required
                >
                  <option value="">Select an SDG</option>
                  {sdgOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget ($)
                </label>
                <input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent"
                  placeholder="10000"
                  min="0"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1DBF73] text-white py-3 rounded-lg font-semibold hover:bg-[#16a05e] transition"
              >
                Submit Idea
              </button>
            </form>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-[#0F3D73] mb-6">My Ideas</h2>
          {myIdeas.length === 0 ? (
            <p className="text-gray-600">You haven't submitted any ideas yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Title</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">SDG</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Budget</th>
                  </tr>
                </thead>
                <tbody>
                  {myIdeas.map((idea) => (
                    <tr key={idea.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">{idea.title}</td>
                      <td className="py-3 px-4">{idea.sdg}</td>
                      <td className="py-3 px-4">${idea.budget.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;
