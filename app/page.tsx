import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to FuelLink KE</h1>
      <p className="text-lg mb-8">Drive Smarter. Fuel Better.</p>
      <div className="space-x-4">
        <Link href="/consumer-dashboard" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Consumer Dashboard
        </Link>
        <Link href="/fleet-dashboard" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Fleet Dashboard
        </Link>
      </div>
    </div>
  );
}
