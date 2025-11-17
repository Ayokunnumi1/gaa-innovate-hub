import { Link } from 'react-router-dom';
import { Lightbulb, Code, DollarSign } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#0F3D73] mb-6">
            Welcome to GAA Innovate Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A marketplace where creators submit SDG-aligned ideas, developers build them, and investors fund them.
          </p>
          <Link
            to="/marketplace"
            className="inline-block bg-[#1A73E8] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#0F3D73] transition shadow-lg"
          >
            Explore Marketplace
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">
            <div className="bg-[#1A73E8] w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F3D73] mb-4">Creators</h3>
            <p className="text-gray-600 leading-relaxed">
              Submit innovative ideas aligned with the UN Sustainable Development Goals. Share your vision and connect with developers and investors to bring your ideas to life.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">
            <div className="bg-[#1DBF73] w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F3D73] mb-4">Developers</h3>
            <p className="text-gray-600 leading-relaxed">
              Browse impactful ideas and choose projects that match your skills. Build solutions that make a real difference in achieving global sustainability goals.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">
            <div className="bg-[#1A73E8] w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F3D73] mb-4">Investors</h3>
            <p className="text-gray-600 leading-relaxed">
              Discover and fund promising SDG-aligned projects. Make strategic investments that generate both financial returns and positive social impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
