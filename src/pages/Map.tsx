import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Map = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Map Page</h1>
      <p className="mb-4">The interactive map will be displayed here. It's currently under construction to fix some issues.</p>
      <Link to="/">
        <Button>Go Back to Home</Button>
      </Link>
    </div>
  );
};

export default Map; 