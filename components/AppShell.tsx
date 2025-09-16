'use client';

import { useMiniKit } from '@coinbase/minikit';
import { useAuthenticate } from '@coinbase/onchainkit/minikit';
import { Avatar } from './ui/Avatar';
import { Button } from './ui/Button';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const { context } = useMiniKit();
  const { user } = useAuthenticate();

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="bg-surface shadow-sm border-b border-gray-200">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LV</span>
              </div>
              <h1 className="text-xl font-bold text-text-primary">LocalVibe</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-2">
                  <Avatar 
                    name={context?.user?.displayName || user.address} 
                    size="sm" 
                  />
                  <span className="text-sm text-text-secondary hidden sm:block">
                    {context?.user?.displayName || 'User'}
                  </span>
                </div>
              ) : (
                <Button size="sm">Connect</Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-gray-200 mt-16">
        <div className="container py-8">
          <div className="text-center text-text-secondary">
            <p>&copy; 2024 LocalVibe. Discover authentic local experiences.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
