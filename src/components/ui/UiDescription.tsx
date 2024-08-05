import React, { useState } from 'react';

interface UiDescriptionProps {
  description: string;
}

const UiDescription = ({ description }: UiDescriptionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDescription = () => setIsExpanded(!isExpanded);

  const limit = 150;

  return (
    <div className="text-gray-500 gap-2 items-center">
      <p className={'leading-5'}>
        {isExpanded ? description : `${description.slice(0, limit)}${description.length > limit ? '...' : ''}`}
      </p>
      {description.length > limit && (
        <button onClick={toggleDescription} className="text-blue-500">
          {isExpanded ? 'See less' : 'See more'}
        </button>
      )}
    </div>
  );
};

export default UiDescription;
