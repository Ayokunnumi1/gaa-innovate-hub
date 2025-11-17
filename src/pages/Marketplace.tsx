import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ArrowRight } from 'lucide-react';

const Marketplace = () => {
  const { ideas } = useApp();

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#0F3D73]">Marketplace</h1>
          <p className="text-gray-600 mt-2">Explore innovative ideas aligned with Sustainable Development Goals</p>
        </div>

        {ideas.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <p className="text-gray-600 text-lg">No ideas available yet. Be the first to submit one!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ideas.map((idea) => (
              <div
                key={idea.id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
              >
                <div className="mb-4">
                  <span className="inline-block bg-[#1A73E8] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {idea.sdg}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0F3D73] mb-3">{idea.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{idea.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Budget:</span>
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
  );
};

export default Marketplace;
