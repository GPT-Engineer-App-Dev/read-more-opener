import React from 'react';
import { ExternalLink } from 'lucide-react';

const StoryCard = ({ title, upvotes, url }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">Upvotes: {upvotes}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 flex items-center">
        Read more <ExternalLink className="ml-1 h-4 w-4" />
      </a>
    </div>
  );
};

export default StoryCard;