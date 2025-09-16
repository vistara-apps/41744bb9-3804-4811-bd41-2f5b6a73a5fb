'use client';

import { useState } from 'react';
import { SearchBar } from './ui/SearchBar';
import { Button } from './ui/Button';

interface HeroSectionProps {
  onSearch?: (query: string) => void;
}

export function HeroSection({ onSearch }: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onSearch?.(query);
  };

  return (
    <section className="relative bg-gradient-to-br from-orange-400 via-pink-400 to-green-400 py-20">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <div className="relative container text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Find unique experiences near you.
        </h1>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Discover authentic local experiences hosted by passionate locals in your area.
        </p>
        
        <div className="max-w-md mx-auto mb-8">
          <div className="flex">
            <SearchBar
              placeholder="Featured experiences"
              onSearch={handleSearch}
              className="flex-1"
            />
            <Button className="ml-2 bg-accent hover:bg-accent/90">
              Sign Up
            </Button>
          </div>
        </div>
        
        <div className="flex items-center justify-center space-x-4 text-white/80">
          <span>Featured experiences & chill</span>
          <span>/</span>
          <span>List Your Experience</span>
        </div>
      </div>
    </section>
  );
}
