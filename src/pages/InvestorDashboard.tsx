import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ArrowRight } from 'lucide-react';

const InvestorDashboard = () => {
  const { currentUser, ideas, investorInterests } = useApp();

  const fundedIdeas = ideas.filter((idea) => investorInterests.includes(idea.id));
  const totalInvestment = fundedIdeas.reduce((sum, idea) => sum + idea.budget, 0);

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#0F3D73]">Investor Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {currentUser?.name}!</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#0F3D73]">Investment Portfolio</h2>
            <div className="text-right">
              <p className="text-sm text-gray-600">Total Committed</p>
              <p className="text-3xl font-bold text-[#1DBF73]">
                ${totalInvestment.toLocaleString()}
              </p>
            </div>
          </div>

          {fundedIdeas.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">You haven't funded any ideas yet.</p>
              <Link
                to="/marketplace"
                className="inline-flex items-center space-x-2 bg-[#1A73E8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0F3D73] transition"
              >
                <span>Browse Marketplace</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {fundedIdeas.map((idea) => (
                <div
                  key={idea.id}
                  className="bg-[#F9FAFB] rounded-lg p-6 border border-gray-200 hover:border-[#1A73E8] transition"
                >
                  <div className="mb-3">
                    <span className="inline-block bg-[#1A73E8] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {idea.sdg}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F3D73] mb-2">{idea.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{idea.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">Investment:</span>
                    <span className="text-lg font-bold text-[#1DBF73]">
                      ${idea.budget.toLocaleString()}
                    </span>
                  </div>
                  <Link
                    to={`/idea/${idea.id}`}
                    className="flex items-center justify-center space-x-2 bg-[#1A73E8] text-white px-4 py-2 rounded-lg hover:bg-[#0F3D73] transition"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvestorDashboard;
