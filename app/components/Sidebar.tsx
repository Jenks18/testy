"use client";

import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  LayoutDashboard,
  CreditCard,
  ArrowRightLeft,
  Users,
  Car,
  DollarSign,
  FileText,
  History,
  Wallet,
  Key,
  Cog,
  Link2,
  Map,
  User,
  Gift,
  LifeBuoy,
  LogOut,
} from 'lucide-react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div
      className={`transition-all duration-300 bg-white h-screen p-4 flex flex-col justify-between ${
        isExpanded ? 'w-64' : 'w-20'
      }`}
    >
      <div>
        <div className="flex justify-between items-center mb-8">
          {isExpanded && (
            <h1 className="text-xl font-bold">FuelLink KE</h1>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-lg hover:bg-gray-200"
          >
            <ChevronLeft
              className={`transition-transform duration-300 ${
                isExpanded ? '' : 'rotate-180'
              }`}
            />
          </button>
        </div>

        <nav>
          <ul>
            <li className="mb-4">
              <h2 className="text-sm font-semibold text-gray-500 uppercase px-4">
                {isExpanded ? 'Dashboard' : 'DB'}
              </h2>
              <Link
                href="/"
                className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-200"
              >
                <LayoutDashboard />
                {isExpanded && <span className="ml-4">Overview</span>}
              </Link>
            </li>
            <li className="mb-4">
              <h2 className="text-sm font-semibold text-gray-500 uppercase px-4">
                {isExpanded ? 'Cards' : 'CD'}
              </h2>
              <Link
                href="/cards"
                className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-200"
              >
                <CreditCard />
                {isExpanded && <span className="ml-4">Manage Cards</span>}
              </Link>
            </li>
            <li className="mb-4">
              <h2 className="text-sm font-semibold text-gray-500 uppercase px-4">
                {isExpanded ? 'Transactions' : 'TR'}
              </h2>
              <Link
                href="/transactions"
                className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-200"
              >
                <ArrowRightLeft />
                {isExpanded && (
                  <span className="ml-4">View Transactions</span>
                )}
              </Link>
            </li>
            <li className="mb-4">
              <h2 className="text-sm font-semibold text-gray-500 uppercase px-4">
                {isExpanded ? 'Drivers' : 'DR'}
              </h2>
              <Link
                href="/drivers"
                className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-200"
              >
                <Users />
                {isExpanded && <span className="ml-4">Manage Drivers</span>}
              </Link>
            </li>
            <li className="mb-4">
              <h2 className="text-sm font-semibold text-gray-500 uppercase px-4">
                {isExpanded ? 'Vehicles' : 'VH'}
              </h2>
              <Link
                href="/vehicles"
                className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-200"
              >
                <Car />
                {isExpanded && <span className="ml-4">Manage Vehicles</span>}
              </Link>
            </li>
            <li className="mb-4">
              <h2 className="text-sm font-semibold text-gray-500 uppercase px-4">
                {isExpanded ? 'Payroll' : 'PR'}
              </h2>
              <Link
                href="/payroll"
                className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-200 bg-green-100 text-green-700"
              >
                <DollarSign />
                {isExpanded && <span className="ml-4">Payroll Overview</span>}
              </Link>
              <Link
                href="/payroll/history"
                className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-200"
              >
                <History />
                {isExpanded && <span className="ml-4">Payroll History</span>}
              </Link>
            </li>
            <li className="mb-4">
              <h2 className="text-sm font-semibold text-gray-500 uppercase px-4">
                {isExpanded ? 'Billing' : 'BL'}
              </h2>
              <Link
                href="/billing/statements"
                className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-200"
              >
                <FileText />
                {isExpanded && <span className="ml-4">Statements</span>}
              </Link>
              <Link
                href="/billing/history"
                className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-200"
              >
                <History />
                {isExpanded && <span className="ml-4">Payment History</span>}
              </Link>
              <Link
                href="/billing/methods"
                className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-200"
              >
                <Wallet />
                {isExpanded && <span className="ml-4">Payment Methods</span>}
              </Link>
              <Link
                href="/billing/api-tokens"
                className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-200"
              >
                <Key />
                {isExpanded && <span className="ml-4">Manage API Tokens</span>}
              </Link>
            </li>
            <li className="mb-4">
              <h2 className="text-sm font-semibold text-gray-500 uppercase px-4">
                {isExpanded ? 'Telematics' : 'TM'}
              </h2>
              <Link
                href="/telematics/connect"
                className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-200"
              >
                <Link2 />
                {isExpanded && <span className="ml-4">Connect</span>}
              </Link>
              <Link
                href="/telematics/vehicles-cards"
                className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-200"
              >
                <Cog />
                {isExpanded && (
                  <span className="ml-4">Vehicles / Cards</span>
                )}
              </Link>
              <Link
                href="/telematics/map"
                className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-200"
              >
                <Map />
                {isExpanded && <span className="ml-4">Trucks Map</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <div className="border-t pt-4">
          <h2 className="text-sm font-semibold text-gray-500 uppercase px-4">
            {isExpanded ? 'User' : 'U'}
          </h2>
          <Link
            href="/refer"
            className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-200"
          >
            <Gift />
            {isExpanded && <span className="ml-4">Refer & Earn</span>}
          </Link>
          <Link
            href="/support"
            className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-200"
          >
            <LifeBuoy />
            {isExpanded && <span className="ml-4">Support</span>}
          </Link>
          <Link
            href="/logout"
            className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-200"
          >
            <LogOut />
            {isExpanded && <span className="ml-4">Log Out</span>}
          </Link>
        </div>
        <div className="flex items-center mt-4">
          <User />
          {isExpanded && (
            <div className="ml-4">
              <p className="font-semibold">Benjamin J.</p>
              <p className="text-sm text-gray-500">johannsen@acme.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
