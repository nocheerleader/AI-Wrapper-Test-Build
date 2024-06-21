import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import XGhostWriterForm from './XGhostWriterForm';
import CraftPrompt from './CraftPrompt';

const App = () => {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <nav className="mb-8">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-purple-600 hover:text-purple-800">
                Home
              </Link>
            </li>
            <li>
              <Link to="/craft-prompt" className="text-purple-600 hover:text-purple-800">
                Craft Prompt
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<XGhostWriterForm />} />
          <Route path="/craft-prompt" element={<CraftPrompt />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


