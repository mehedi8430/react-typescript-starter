import React from 'react';
import cheack from '@/assets/icons/cheack.png'

interface EvaluateCardProps {
  index: number;
  title: string;
  description: string;
  points: string[];
  imageUrl: string;
}

const EvaluateCard: React.FC<EvaluateCardProps> = ({
  index,
  title,
  description,
  points,
  imageUrl,
}) => {
  const isEven = index % 2 !== 1;

  return (
    <div 
      className={`flex flex-col md:flex-row justify-between items-center gap-8 md:gap-14 w-full max-w-6xl mx-auto ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Image Container */}
      <div className="w-full md:w-1/2 h-80 rounded-3xl overflow-hidden shadow-lg">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover flex justify-center items-center" 
          loading="lazy"
        />
      </div>

      {/* Content Container */}
      <div className="w-full md:w-1/2 relative">
        {/* Index number - absolute positioned */}
        <span className="absolute -top-14 left-0 text-8xl font-extrabold text-yellow-500 opacity-30">
          {String(index).padStart(2, '0')}
        </span>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold text-gray-900">{title}</h3>
            <p className="text-base text-gray-600">{description}</p>
          </div>

          <ul className="space-y-4">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-4">
                <img src={cheack} className=" w-5 h-5" />
                <span className="text-xl font-semibold text-gray-900">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EvaluateCard;