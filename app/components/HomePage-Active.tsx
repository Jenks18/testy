import { DollarSign, Download, Upload, AlertTriangle } from 'lucide-react';

const HomePageActive = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Hello, Benjamin</h1>
          <p className="text-gray-500">
            You have an outstanding balance.
          </p>
        </div>
        <div className="flex space-x-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center">
            <Upload className="mr-2" />
            Deposit
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg flex items-center">
            <DollarSign className="mr-2" />
            Pay Now
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg flex items-center">
            <Download className="mr-2" />
            Withdraw
          </button>
        </div>
      </div>
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8" role="alert">
        <div className="flex">
          <div className="py-1">
            <AlertTriangle className="h-6 w-6 text-red-500 mr-4" />
          </div>
          <div>
            <p className="font-bold">Outstanding Balance</p>
            <p className="text-sm">You have an outstanding balance of $500.00. Please pay it as soon as possible to avoid any service interruptions.</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="border p-4 rounded-lg bg-white">
          <h2 className="text-lg font-semibold mb-2">Current Balance</h2>
          <p className="text-3xl font-bold text-red-600">-$500.00</p>
        </div>
        <div className="border p-4 rounded-lg bg-white">
          <h2 className="text-lg font-semibold mb-2">Available Credit</h2>
          <p className="text-3xl font-bold">$9,500.00</p>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
        <div className="bg-white p-4 rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="p-2">Date</th>
                <th className="p-2">Amount</th>
                <th className="p-2">To/From</th>
                <th className="p-2">Method</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t bg-red-50">
                <td className="p-2">2024-07-26</td>
                <td className="p-2 text-red-600">-$500.00</td>
                <td className="p-2">Overdue Balance</td>
                <td className="p-2">System</td>
                <td className="p-2">
                  <span className="bg-red-200 text-red-800 py-1 px-2 rounded-full text-xs">
                    DUE
                  </span>
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-2">2024-07-28</td>
                <td className="p-2">$250.00</td>
                <td className="p-2">Juan Villareal</td>
                <td className="p-2">Instant Payout</td>
                <td className="p-2">
                  <span className="bg-green-200 text-green-800 py-1 px-2 rounded-full text-xs">
                    COMPLETED
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomePageActive;
