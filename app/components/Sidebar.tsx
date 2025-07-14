import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-screen p-4">
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-500">Dashboard</h2>
        <ul>
          <li>
            <Link href="/" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
              Overview
            </Link>
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-500">Cards</h2>
        <ul>
          <li>
            <Link href="/cards" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
              Manage Cards
            </Link>
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-500">Transactions</h2>
        <ul>
          <li>
            <Link href="/transactions" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
              View Transactions
            </Link>
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-500">Drivers</h2>
        <ul>
          <li>
            <Link href="/drivers" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
              Manage Drivers
            </Link>
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-500">Vehicles</h2>
        <ul>
          <li>
            <Link href="/vehicles" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
              Manage Vehicles
            </Link>
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-500">Payroll</h2>
        <ul>
          <li>
            <Link href="/payroll" className="block py-2 px-4 rounded-lg hover:bg-gray-200 bg-green-100 text-green-700">
              Payroll Overview
            </Link>
          </li>
          <li>
            <Link href="/payroll/history" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
              Payroll History
            </Link>
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-500">Billing</h2>
        <ul>
          <li>
            <Link href="/billing/statements" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
              Statements
            </Link>
          </li>
          <li>
            <Link href="/billing/history" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
              Payment History
            </Link>
          </li>
          <li>
            <Link href="/billing/methods" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
              Payment Methods
            </Link>
          </li>
          <li>
            <Link href="/billing/api-tokens" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
              Manage API Tokens
            </Link>
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-500">Telematics</h2>
        <ul>
          <li>
            <Link href="/telematics/connect" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
              Connect
            </Link>
          </li>
          <li>
            <Link href="/telematics/vehicles-cards" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
              Vehicles / Cards
            </Link>
          </li>
          <li>
            <Link href="/telematics/map" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
              Trucks Map
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
