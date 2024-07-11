import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to Hacker News Top Stories</h1>
      <Link to="/top-stories" className="text-blue-500">
        View Top Stories
      </Link>
    </div>
  );
};

export default Index;