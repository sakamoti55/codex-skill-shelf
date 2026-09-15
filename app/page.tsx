'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { skills } from './generated-skills';

const categories = ['すべて', ...Array.from(new Set(skills.map((skill) => skill.category)))];

export default function Home() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('すべて');
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const focusSearch = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener('keydown', focusSearch);
    return () => window.removeEventListener('keydown', focusSearch);
  }, []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return skills.filter((skill) => {
      const inCategory = category === 'すべて' || skill.category === category;
      const matches = !needle || `${skill.name} ${skill.label} ${skill.description}`.toLowerCase().includes(needle);
      return inCategory && matches;
    });
  }, [category, query]);

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Skill Shelf ホーム">
          <span className="brand-mark">S</span>
          <span>Skill Shelf</span>
        </a>
        <div className="sync-state"><span /> Gitと同期済み</div>
      </header>

      <section id="top" className="hero">
        <p className="eyebrow">YOUR CODEX SKILLS</p>
        <h1>使えるスキルを、<br />ひと目で。</h1>
        <p className="lead">GPTで作ったスキルをリポジトリから自動で読み込み、探しやすいカードにまとめます。</p>
        <div className="search-wrap">
          <span aria-hidden="true">⌕</span>
          <input ref={searchRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="スキル名や説明で検索" aria-label="スキルを検索" />
          <kbd>⌘ K</kbd>
        </div>
      </section>

      <section className="catalog" aria-labelledby="catalog-title">
        <div className="catalog-head">
          <div>
            <p className="section-kicker">LIBRARY</p>
            <h2 id="catalog-title">スキル一覧 <span>{filtered.length}</span></h2>
          </div>
          <div className="filters" aria-label="カテゴリで絞り込み">
            {categories.map((item) => (
              <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>
            ))}
          </div>
        </div>

        <div className="skill-grid">
          {filtered.map((skill, index) => (
            <a className="skill-card" href={skill.repositoryUrl} target="_blank" rel="noreferrer" key={skill.name} style={{ '--delay': `${index * 35}ms` } as React.CSSProperties}>
              <div className="card-top">
                <span className={`skill-icon tone-${index % 5}`}>{skill.label.charAt(0)}</span>
                <span className="category">{skill.category}</span>
              </div>
              <h3>{skill.label}</h3>
              <code>{skill.name}</code>
              <p>{skill.description}</p>
              <footer><span>SKILL.md ↗</span><time>{skill.updated}</time></footer>
            </a>
          ))}
        </div>

        {filtered.length === 0 && <div className="empty">該当するスキルがありません。検索語を変えてみてください。</div>}
      </section>
    </main>
  );
}
