import React from 'react';

const TailwindTest = () => {
  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-800 mb-2">Tailwind CSS Test</h2>
      <p className="text-gray-700">If you can see this styled with blue background and proper typography, Tailwind CSS is working!</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        Test Button
      </button>
    </div>
  );
};

export default TailwindTest;