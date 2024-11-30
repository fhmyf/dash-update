# Sensor Monitoring Dashboard

A modern, responsive dashboard for monitoring sensor data in real-time. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🔐 Secure authentication system
- 📊 Real-time sensor data visualization
- 📱 Responsive design for all screen sizes
- 🌙 Dark mode interface
- 📈 Interactive charts and graphs
- ⚡ Fast and efficient data updates
- 🔔 Real-time notifications
- ⚙️ Customizable sensor settings

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm 7.x or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sensor-dashboard.git
   cd sensor-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Login Credentials

For demo purposes, use these credentials:
- Email: admin@example.com
- Password: password

## Project Structure

```
src/
├── components/         # Reusable UI components
├── contexts/          # React contexts
├── hooks/            # Custom React hooks
├── pages/            # Page components
├── services/         # API and other services
├── types/            # TypeScript type definitions
└── utils/            # Utility functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Sensor Settings

Users can customize:
- Which sensors are visible
- Data refresh intervals
- Display preferences

### Theme Customization

The dashboard uses Tailwind CSS for styling. Customize the theme in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0a192f',
          900: '#0f2744',
          800: '#1a365d',
          700: '#2a4365',
        }
      }
    }
  }
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.