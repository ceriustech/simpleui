import './global.css';
import { StyledComponentsRegistry } from './registry';

export const metadata = {
  title: 'SimpleUI',
  description:
    'SimpleUI is a SaaS platform offering beautifully-designed, accessible, and customizable UI components for React, Vue, HTML/CSS/JS, and more. Spend your time building your startup, not integrating APIs.',
  keywords:
    'SimpleUI, UI components, SaaS, React, Vue, HTML, CSS, JavaScript, design system, startup, fast deployment, accessible UI, customizable components',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#000000',
  openGraph: {
    title: 'SimpleUI - Accelerate Your Development',
    description:
      'Discover SimpleUI – a comprehensive suite of customizable and accessible UI components designed to streamline development and help you focus on building your startup.',
    url: 'https://simpleui.app', // Update to your actual domain
    siteName: 'SimpleUI',
    type: 'website',
    images: [
      {
        url: '', // Placeholder for your OG image
        width: 1200,
        height: 630,
        alt: 'SimpleUI Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SimpleUI', // Replace with your Twitter handle if available
    creator: '@SimpleUI',
    title: 'SimpleUI',
    description:
      'Simplify your development process with SimpleUI’s pre-built, accessible UI components. Focus on building your startup, not integrating APIs.',
    images: [''],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
