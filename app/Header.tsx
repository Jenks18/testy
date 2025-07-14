import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="font-bold text-xl">
          FuelLink KE
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/consumer-dashboard">Consumer Dashboard</Link></li>
            <li><Link href="/fleet-dashboard">Fleet Dashboard</Link></li>
            <li><Link href="/fuel-cards">Fuel Cards</Link></li>
            <li><Link href="/vehicles">Vehicles</Link></li>
            <li><Link href="/drivers">Drivers</Link></li>
            <li><Link href="/routing">Routing</Link></li>
            <li><Link href="/reports">Reports</Link></li>
            <li><Link href="/rewards">Rewards</Link></li>
            <li><Link href="/settings">Settings</Link></li>
            <li><Link href="/transactions">Transactions</Link></li>
            <li><Link href="/login">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
