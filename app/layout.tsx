import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://skill-shelf.kohseimeimei.chatgpt.site'),
  title: 'Skill Shelf — Codex Skills Library',
  description: 'GPTで作ったCodexスキルを、探しやすく一覧表示する個人ライブラリ。',
  openGraph: {
    title: 'Skill Shelf — Codex Skills Library',
    description: 'GPTで作ったCodexスキルを、探しやすく一覧表示する個人ライブラリ。',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skill Shelf — Codex Skills Library',
    description: 'GPTで作ったCodexスキルを、探しやすく一覧表示する個人ライブラリ。',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
