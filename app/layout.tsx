import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Skill Shelf — Codex Skills Library',
  description: 'GPTで作ったCodexスキルを、探しやすく一覧表示する個人ライブラリ。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
