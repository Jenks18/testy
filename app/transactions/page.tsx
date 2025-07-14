const TransactionsPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Transactions</h1>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search by station, driver, or vehicle..."
          className="border p-2 rounded-lg w-1/2"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Download CSV
        </button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Date</th>
            <th className="border p-2">Station</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Vehicle</th>
            <th className="border p-2">Card</th>
            <th className="border p-2">Driver</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">2024-07-28</td>
            <td className="border p-2">Total, Thika Road</td>
            <td className="border p-2">KES 2,000</td>
            <td className="border p-2">KCD 123A</td>
            <td className="border p-2">**** 1234</td>
            <td className="border p-2">John Doe</td>
            <td className="border p-2">
              <button className="text-red-500 hover:underline">Flag</button>
            </td>
          </tr>
          <tr>
            <td className="border p-2">2024-07-27</td>
            <td className="border p-2">Shell, Waiyaki Way</td>
            <td className="border p-2">KES 1,500</td>
            <td className="border p-2">KDE 456B</td>
            <td className="border p-2">**** 5678</td>
            <td className="border p-2">Jane Smith</td>
            <td className="border p-2">
              <button className="text-red-500 hover:underline">Flag</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsPage;
