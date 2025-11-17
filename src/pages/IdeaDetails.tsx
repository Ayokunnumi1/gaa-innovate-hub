import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Code, DollarSign, Edit } from 'lucide-react';

const IdeaDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { ideas, currentUser, addDeveloperInterest, addInvestorInterest } = useApp();
  const navigate = useNavigate();

  const idea = ideas.find((i) => i.id === id);

  if (!idea) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <p className="text-gray-600">Idea not found.</p>
          </div>
        </div>
      </div>
    );
  }

  const handleDevelop = () => {
    if (currentUser && currentUser.role === 'developer') {
      addDeveloperInterest(idea.id);
      alert('Action recorded. Thank you!');
      navigate('/developer-dashboard');
    }
  };

  const handleFund = () => {
    if (currentUser && currentUser.role === 'investor') {
      addInvestorInterest(idea.id);
      alert('Action recorded. Thank you!');
      navigate('/investor-dashboard');
    }
  };

  const handleEdit = () => {
    alert('Action recorded. Thank you!');
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="mb-6">
            <span className="inline-block bg-[#1A73E8] text-white text-sm font-semibold px-4 py-2 rounded-full">
              {idea.sdg}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-[#0F3D73] mb-4">{idea.title}</h1>

          <div className="mb-6">
            <p className="text-gray-600 text-sm">Submitted by</p>
            <p className="text-[#0F3D73] font-semibold">{idea.creatorName}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#0F3D73] mb-3">Description</h2>
            <p className="text-gray-700 leading-relaxed">{idea.description}</p>
          </div>

          <div className="bg-[#F9FAFB] rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Required Budget:</span>
              <span className="text-3xl font-bold text-[#1DBF73]">
                ${idea.budget.toLocaleString()}
              </span>
            </div>
          </div>

          {currentUser && (
            <div className="flex gap-4">
              {currentUser.role === 'developer' && (
                <button
                  onClick={handleDevelop}
                  className="flex-1 flex items-center justify-center space-x-2 bg-[#1DBF73] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#16a05e] transition"
                >
                  <Code className="w-5 h-5" />
                  <span>Develop This Idea</span>
                </button>
              )}

              {currentUser.role === 'investor' && (
                <button
                  onClick={handleFund}
                  className="flex-1 flex items-center justify-center space-x-2 bg-[#1A73E8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0F3D73] transition"
                >
                  <DollarSign className="w-5 h-5" />
                  <span>Fund This Idea</span>
                </button>
              )}

              {currentUser.role === 'creator' && idea.creatorName === currentUser.name && (
                <button
                  onClick={handleEdit}
                  className="flex-1 flex items-center justify-center space-x-2 bg-[#1A73E8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0F3D73] transition"
                >
                  <Edit className="w-5 h-5" />
                  <span>Edit Idea</span>
                </button>
              )}
            </div>
          )}

          {!currentUser && (
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <p className="text-gray-600">
                Please <a href="/login" className="text-[#1A73E8] hover:underline">login</a> to interact with this idea.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IdeaDetails;
