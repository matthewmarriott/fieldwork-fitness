import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Fieldwork Fitness</h1>
      <p>This is the homepage for your expedition training program.</p>
      <nav>
        <Link href="/about">About</Link> | 
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}
