'use client';

import { Experience } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { Card } from './ui/Card';
import { Avatar } from './ui/Avatar';

interface ExperienceCardProps {
  experience: Experience;
  onClick?: () => void;
}

export function ExperienceCard({ experience, onClick }: ExperienceCardProps) {
  return (
    <Card hover onClick={onClick} className="overflow-hidden p-0">
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={experience.images[0]}
          alt={experience.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-sm font-semibold">
          {formatPrice(experience.price)}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg text-text-primary line-clamp-2">
            {experience.title}
          </h3>
        </div>
        
        <p className="text-text-secondary text-sm mb-3 line-clamp-2">
          {experience.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar name={experience.host?.username || 'Host'} size="sm" />
            <span className="text-sm text-text-secondary">
              {experience.location}
            </span>
          </div>
          
          {experience.rating && (
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium">{experience.rating}</span>
              <span className="text-sm text-text-secondary">({experience.reviewCount})</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
