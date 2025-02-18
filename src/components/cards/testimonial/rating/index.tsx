'use client';

import { Star } from 'lucide-react';
import React, { useState, useEffect } from 'react';

interface StarRatingProps {
  outOf?: number;
  staticRating: number;
}

const StarRating: React.FC<StarRatingProps> = ({
  outOf = 5,
  staticRating = 0,
}) => {
  const [stars, setStars] = useState<number[]>([]);
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    const starArray = [];
    for (let i = 0; i < outOf; i++) {
      starArray.push(i + 1);
    }
    setStars(starArray);
    // Set the rating to the staticRating prop
    setRating(staticRating);
  }, [outOf, staticRating]);

  return (
    <div className="flex gap-1 space-x-3">
      {stars.map((star, i) => (
        <>
          <Star
            size={10}
            key={i}
            className={`${rating >= star ? 'fill-yellow-500 text-yellow-500' : 'text-yellow-500'} `}
          />
        </>
      ))}
    </div>
  );
};

export default StarRating;
