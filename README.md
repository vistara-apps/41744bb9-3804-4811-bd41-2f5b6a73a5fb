# LocalVibe - Base Mini App

LocalVibe is a marketplace connecting travelers with locals offering unique, hyper-local experiences, built as a Base Wallet MiniApp for seamless discovery and booking.

## Features

- **Verified Host Onboarding**: Streamlined process for local hosts to create profiles and get verified
- **Intuitive Experience Listing**: Easy-to-use tools for hosts to showcase their offerings
- **Hyper-Local Discovery**: User-friendly interface for travelers to find niche experiences
- **Secure Booking & Payment**: Integrated booking system with secure payment processing
- **Review & Reputation System**: Community-driven trust and transparency

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Ethereum L2)
- **Wallet Integration**: Base Wallet via MiniKit
- **Identity**: OnchainKit for Farcaster integration
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd localvibe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Add your OnchainKit API key to `.env.local`:
   ```
   NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── loading.tsx        # Loading UI
│   ├── error.tsx          # Error boundary
│   ├── globals.css        # Global styles
│   └── providers.tsx      # MiniKit and OnchainKit providers
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── AppShell.tsx      # Main app layout
│   ├── HeroSection.tsx   # Landing hero section
│   ├── ExperienceCard.tsx # Experience display card
│   ├── ExperienceGrid.tsx # Grid of experiences
│   └── ExperienceDetail.tsx # Detailed experience view
├── lib/                  # Utilities and types
│   ├── types.ts          # TypeScript type definitions
│   ├── constants.ts      # App constants and mock data
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Key Components

### Data Models

- **User**: Host and traveler profiles with Farcaster integration
- **Experience**: Local experiences with pricing, availability, and media
- **Booking**: Reservation system with payment tracking
- **Review**: Community feedback and rating system

### User Flows

1. **Traveler Journey**:
   - Browse featured experiences
   - Search and filter by location/category
   - View detailed experience information
   - Book and pay through Base Wallet

2. **Host Journey**:
   - Complete verification process
   - Create compelling experience listings
   - Manage availability calendar
   - Receive bookings and payments

## Base Mini App Integration

- **MiniKit Provider**: Handles Base Wallet connection and chain configuration
- **OnchainKit**: Provides Farcaster identity and wallet components
- **Frame Actions**: In-app booking and messaging capabilities
- **Notifications**: Real-time updates for bookings and messages

## Design System

The app uses a cohesive design system with:
- **Colors**: Warm gradient palette with primary blue and accent coral
- **Typography**: Clean, readable font hierarchy
- **Components**: Consistent UI patterns across the app
- **Responsive**: Mobile-first design optimized for all devices

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

- `NEXT_PUBLIC_ONCHAINKIT_API_KEY` - OnchainKit API key for Base integration
- `NEXT_PUBLIC_CHAIN_ID` - Base chain ID (8453)
- `NEXT_PUBLIC_APP_NAME` - Application name

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
