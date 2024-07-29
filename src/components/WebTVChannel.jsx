import React, { useState } from 'react';
import { Play, Search, Menu, Info, Tv, Video, X } from 'lucide-react';


// YouTubeEmbed component (unchanged)
const YouTubeEmbed = ({ embedId }) => (
  <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

// Home Page Component
const HomePage = () => (
  <div>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Featured</h2>
      <div className="bg-white rounded-lg shadow-md p-4">
        <YouTubeEmbed embedId="tgJQA6LE8oc" />
      </div>
    </section>
    <section>
      <h2 className="text-2xl font-semibold mb-4">Popular Shows</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {['dQw4w9WgXcQ', 'QH2-TGUlwu4', '9bZkp7q19f0', 'DLzxrzFCyOs'].map((videoId, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <YouTubeEmbed embedId={videoId} />
            <div className="p-2">
              <h3 className="font-semibold">Show Title {index + 1}</h3>
              <p className="text-sm text-gray-600">Episode {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

// Shows Page Component
const ShowsPage = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Our Shows</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[1, 2, 3, 4].map((show) => (
        <div key={show} className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-xl font-semibold mb-2">Show {show}</h3>
          <p className="text-gray-600 mb-4">Description of Show {show}. This is a brief overview of what the show is about and why viewers might be interested.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Watch Now</button>
        </div>
      ))}
    </div>
  </div>
);

// About Page Component
const AboutPage = () => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-semibold mb-4">About Our Web TV Channel</h2>
    <p className="mb-4">Welcome to our Web TV Channel! We are dedicated to bringing you the best in online entertainment and information.</p>
    <p className="mb-4">Our mission is to provide high-quality, engaging content that informs, entertains, and inspires our viewers. From original shows to live broadcasts, we strive to offer a diverse range of programming to suit all interests.</p>
    <p>Founded in 2024, our channel has quickly grown to become a favorite destination for viewers seeking fresh and innovative content. We're constantly evolving and expanding our offerings to meet the changing needs of our audience.</p>
  </div>
);

// Live Page Component with Owncast
const LivePage = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Live Stream</h2>
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://your-owncast-server.com/embed/video"
          frameBorder="0"
          allowFullScreen
          title="Live Stream"
        ></iframe>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Current Stream: Show Title</h3>
        <p className="text-gray-600">Join us for our live broadcast of [Show Name]. Interact with hosts and other viewers in real-time!</p>
      </div>
    </div>
  </div>
);

// Main WebTVChannel Component
const WebTVChannel = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'shows': return <ShowsPage />;
      case 'live': return <LivePage />;
      case 'about': return <AboutPage />;
      default: return <HomePage />;
    }
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-orange-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MBS World</h1>
          <nav className="hidden md:flex space-x-4">
            <button onClick={() => handleNavClick('home')} className="flex items-center hover:text-blue-200"><Tv className="mr-1" size={18} /> Home</button>
            <button onClick={() => handleNavClick('shows')} className="flex items-center hover:text-blue-200"><Play className="mr-1" size={18} /> Shows</button>
            <button onClick={() => handleNavClick('live')} className="flex items-center hover:text-blue-200"><Video className="mr-1" size={18} /> Live</button>
            <button onClick={() => handleNavClick('about')} className="flex items-center hover:text-blue-200"><Info className="mr-1" size={18} /> About</button>
          </nav>
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-orange-500 text-white">
          <nav className="flex flex-col items-center py-4">
            <button onClick={() => handleNavClick('home')} className="w-full py-2 flex justify-center items-center hover:bg-blue-600"><Tv className="mr-1" size={18} /> Home</button>
            <button onClick={() => handleNavClick('shows')} className="w-full py-2 flex justify-center items-center hover:bg-blue-600"><Play className="mr-1" size={18} /> Shows</button>
            <button onClick={() => handleNavClick('live')} className="w-full py-2 flex justify-center items-center hover:bg-blue-600"><Video className="mr-1" size={18} /> Live</button>
            <button onClick={() => handleNavClick('about')} className="w-full py-2 flex justify-center items-center hover:bg-blue-600"><Info className="mr-1" size={18} /> About</button>
          </nav>
        </div>
      )}

      <main className="flex-grow container mx-auto p-4">
        {renderPage()}
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 MBS Wolrd Sri Lanka. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default WebTVChannel;