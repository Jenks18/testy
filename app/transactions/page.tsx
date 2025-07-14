const TransactionsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <div className="bg-white p-4 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="p-2">Date</th>
              <th className="p-2">Station</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Vehicle</th>
              <th className="p-2">Card</th>
              <th className="p-2">Driver</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">2024-07-28</td>
              <td className="p-2">Total, Thika Road</td>
              <td className="p-2">KES 2,000</td>
              <td className="p-2">KCD 123A</td>
              <td className="p-2">**** 1234</td>
              <td className="p-2">Benjamin Johannsen</td>
              <td className="p-2">
                <button className="text-red-500 hover:underline">
                  Flag
                </button>
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-2">2024-07-27</td>
              <td className="p-2">Shell, Waiyaki Way</td>
              <td className="p-2">KES 1,500</td>
              <td className="p-2">KDE 456B</td>
              <td className="p-2">**** 5678</td>
              <td className="p-2">Elizabeth Williamson</td>
              <td className="p-2">
                <button className="text-red-500 hover:underline">
                  Flag
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsPage;
