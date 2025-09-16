'use client';

import { useState } from 'react';
import { Experience } from '@/lib/types';
import { formatPrice, formatDate } from '@/lib/utils';
import { Button } from './ui/Button';
import { Avatar } from './ui/Avatar';

interface ExperienceDetailProps {
  experience: Experience;
  onBook: () => void;
}

export function ExperienceDetail({ experience, onBook }: ExperienceDetailProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [attendees, setAttendees] = useState(1);

  const totalPrice = experience.price * attendees;

  return (
    <div className="space-y-6">
      {/* Image Gallery */}
      <div className="aspect-[16/9] rounded-lg overflow-hidden">
        <img
          src={experience.images[0]}
          alt={experience.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Experience Info */}
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          {experience.title}
        </h1>
        
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-2">
            <Avatar name={experience.host?.username || 'Host'} size="sm" />
            <span className="text-sm text-text-secondary">
              Hosted by {experience.host?.username || 'Local Host'}
            </span>
          </div>
          
          {experience.rating && (
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium">{experience.rating}</span>
              <span className="text-sm text-text-secondary">({experience.reviewCount} reviews)</span>
            </div>
          )}
        </div>

        <p className="text-text-secondary mb-6">{experience.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <span className="text-sm text-text-secondary">Location</span>
            <p className="font-medium">{experience.location}</p>
          </div>
          <div>
            <span className="text-sm text-text-secondary">Category</span>
            <p className="font-medium">{experience.category}</p>
          </div>
          <div>
            <span className="text-sm text-text-secondary">Max Participants</span>
            <p className="font-medium">{experience.maxParticipants} people</p>
          </div>
          <div>
            <span className="text-sm text-text-secondary">Price per person</span>
            <p className="font-medium">{formatPrice(experience.price)}</p>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="border-t pt-6">
        <h3 className="font-semibold mb-4">Book this experience</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Select Date
            </label>
            <select
              value={selectedDate?.toISOString() || ''}
              onChange={(e) => setSelectedDate(e.target.value ? new Date(e.target.value) : null)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Choose a date</option>
              {experience.availability.map((date) => (
                <option key={date.toISOString()} value={date.toISOString()}>
                  {formatDate(date)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Number of Attendees
            </label>
            <select
              value={attendees}
              onChange={(e) => setAttendees(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {Array.from({ length: experience.maxParticipants }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'person' : 'people'}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-medium">Total Price:</span>
              <span className="text-xl font-bold text-primary">
                {formatPrice(totalPrice)}
              </span>
            </div>
          </div>

          <Button
            onClick={onBook}
            disabled={!selectedDate}
            className="w-full"
            size="lg"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
