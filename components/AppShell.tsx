interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
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
              <button className="btn-primary text-sm px-4 py-2">
                Connect Wallet
              </button>
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
