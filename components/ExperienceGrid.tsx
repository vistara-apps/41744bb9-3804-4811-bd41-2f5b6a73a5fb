'use client';

import { useState } from 'react';
import { Experience } from '@/lib/types';
import { ExperienceCard } from './ExperienceCard';
import { Modal } from './ui/Modal';
import { ExperienceDetail } from './ExperienceDetail';

interface ExperienceGridProps {
  experiences: Experience[];
  title?: string;
}

export function ExperienceGrid({ experiences, title }: ExperienceGridProps) {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  return (
    <section className="py-12">
      <div className="container">
        {title && (
          <h2 className="text-2xl font-bold text-text-primary mb-8">{title}</h2>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.experienceId}
              experience={experience}
              onClick={() => setSelectedExperience(experience)}
            />
          ))}
        </div>
        
        <Modal
          isOpen={!!selectedExperience}
          onClose={() => setSelectedExperience(null)}
          className="max-w-2xl"
        >
          {selectedExperience && (
            <ExperienceDetail
              experience={selectedExperience}
              onBook={() => {
                // Handle booking logic
                console.log('Booking experience:', selectedExperience.experienceId);
                setSelectedExperience(null);
              }}
            />
          )}
        </Modal>
      </div>
    </section>
  );
}
