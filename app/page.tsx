import Link from 'next/link';

export default function Home() {
  return (
    <div className="main-container bg-[url('/background.jpg')]">
      <h1 className="main-title bg-amber-100">Welcome to the Main Page</h1>
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
        <p>
          <Link href="/ai-blog-generator">
            <button className="main-button">Go to AIBlogGenerator</button>
          </Link>
        </p>
        <p>
          <Link href="/finance-manager">
            <button className="main-button">Go to FinanceManager</button>
          </Link>
        </p>
      </div>
    </div>
  );
}
