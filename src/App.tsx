import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CreatorDashboard from "./pages/CreatorDashboard";
import Marketplace from "./pages/Marketplace";
import IdeaDetails from "./pages/IdeaDetails";
import DeveloperDashboard from "./pages/DeveloperDashboard";
import InvestorDashboard from "./pages/InvestorDashboard";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-[#F9FAFB] flex flex-col">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/creator-dashboard" element={<CreatorDashboard />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/idea/:id" element={<IdeaDetails />} />
              <Route
                path="/developer-dashboard"
                element={<DeveloperDashboard />}
              />
              <Route
                path="/investor-dashboard"
                element={<InvestorDashboard />}
              />
            </Routes>
          </div>
          <footer className="bg-white text-gray-500 text-center py-4 shadow-inner">
            &copy; {new Date().getFullYear()} GAA Innovate Hub. All rights
            reserved.
          </footer>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
