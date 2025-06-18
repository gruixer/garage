import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative">
        
        {/* Left: Logo + Title */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold">CA</span>
          </div>
          <h1 className="text-xl font-bold">Carrosserie S.aliberti</h1>
        </div>

        {/* Center: Navigation (absolutely centered) */}
        <nav className="hidden md:flex space-x-6 absolute left-1/2 -translate-x-1/2">
          <Link href="/Home">Accueil</Link>
          <Link href="/Services">Nos services</Link>
          <Link href="/NotreTravail">Notre travail</Link>
          <Link href="/Contact">Contact</Link>
        </nav>

        {/* Right: Mobile menu (or empty to preserve spacing) */}
        <div className="md:hidden">
          <button>
            <span className="sr-only">Menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
