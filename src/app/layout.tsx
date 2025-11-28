import type { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Live Hindustan - ताज़ा हिंदी समाचार',
  description: 'भारत की ताज़ा खबरें, समाचार और विश्लेषण। दिल्ली, व्यापार, खेल, शिक्षा और तकनीक से जुड़ी खबरें पढ़ें।',
  keywords: 'समाचार, हिंदी, भारत, दिल्ली, व्यापार',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><text y='32' font-size='32' fill='%23C60C30'>📰</text></svg>" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
