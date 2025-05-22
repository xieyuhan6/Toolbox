import Link from 'next/link';

export const Nav = () => {
  return (
    <div className="header">
      <Link href="/"><h2 className="text-7xl h-full flex flex-col justify-center font-semibold 
        transition-all transform hover:scale-105 cursor-pointer 
        bg-green-500 text-white px-6 py-4 rounded-lg 
        border-2 border-transparent hover:border-green-700 hover:bg-green-600">All in One</h2></Link>
    </div>
  );
};
