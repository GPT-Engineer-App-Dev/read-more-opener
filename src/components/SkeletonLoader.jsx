import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="border p-4 rounded-lg shadow-md mb-4 animate-pulse">
      <div className="h-6 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
};

export default SkeletonLoader;