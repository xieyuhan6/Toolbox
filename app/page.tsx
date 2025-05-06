import Link from 'next/link';

export default function Home() {
  return (
    <div className="main-container">
      <h1 className="main-title">Welcome to the Main Page</h1>
      <div className="button-container">
        <p>
          <Link href="/egg-timer">
            <button className="main-button">Go to Egg Timer</button>
          </Link>
        </p>
        <p>
          <Link href="/sticker">
            <button className="main-button">Go to Sticker</button>
          </Link>
        </p>
      </div>
    </div>
  );
}
