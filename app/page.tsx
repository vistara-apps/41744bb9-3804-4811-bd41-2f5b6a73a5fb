'use client';

import { useState } from 'react';
import { MOCK_EXPERIENCES } from '@/lib/constants';
import { AppShell } from '@/components/AppShell';
import { HeroSection } from '@/components/HeroSection';
import { ExperienceGrid } from '@/components/ExperienceGrid';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredExperiences, setFilteredExperiences] = useState(MOCK_EXPERIENCES);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setFilteredExperiences(MOCK_EXPERIENCES);
      return;
    }

    const filtered = MOCK_EXPERIENCES.filter(
      (experience) =>
        experience.title.toLowerCase().includes(query.toLowerCase()) ||
        experience.description.toLowerCase().includes(query.toLowerCase()) ||
        experience.location.toLowerCase().includes(query.toLowerCase()) ||
        experience.category.toLowerCase().includes(query.toLowerCase())
    );
    
    setFilteredExperiences(filtered);
  };

  return (
    <AppShell>
      <HeroSection onSearch={handleSearch} />
      
      <ExperienceGrid
        experiences={filteredExperiences}
        title={searchQuery ? `Search results for "${searchQuery}"` : 'Featured Experiences'}
      />
      
      {filteredExperiences.length === 0 && searchQuery && (
        <div className="container py-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              No experiences found
            </h3>
            
            <p className="text-text-secondary mb-4">
              Try adjusting your search terms or browse our featured experiences.
            </p>
            
            <button
              onClick={() => handleSearch('')}
              className="text-primary hover:underline"
            >
              Clear search
            </button>
          </div>
        </div>
      )}
    </AppShell>
  );
}
