import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import XGhostWriterForm from './XGhostWriterForm';
import CraftPrompt from './CraftPrompt';
import TestOutput from './TestOutput';

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
            <li>
              <Link to="/test-output" className="text-purple-600 hover:text-purple-800">
                Test Output
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<XGhostWriterForm />} />
          <Route path="/craft-prompt" element={<CraftPrompt />} />
          <Route path="/test-output" element={<TestOutput />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;