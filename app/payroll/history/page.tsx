const PayrollHistoryPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Payroll History</h1>
      <div className="bg-white p-4 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="p-2">Date</th>
              <th className="p-2">Driver</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">2024-07-15</td>
              <td className="p-2">Benjamin Johannsen</td>
              <td className="p-2">$1,200.00</td>
              <td className="p-2">
                <span className="bg-green-200 text-green-800 py-1 px-2 rounded-full text-xs">
                  PAID
                </span>
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-2">2024-07-15</td>
              <td className="p-2">Elizabeth Williamson</td>
              <td className="p-2">$1,150.00</td>
              <td className="p-2">
                <span className="bg-green-200 text-green-800 py-1 px-2 rounded-full text-xs">
                  PAID
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayrollHistoryPage;
