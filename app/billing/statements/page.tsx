const StatementsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Statements</h1>
      <div className="bg-white p-4 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="p-2">Date</th>
              <th className="p-2">Statement ID</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">2024-07-01</td>
              <td className="p-2">STMT-001</td>
              <td className="p-2">$15,000.00</td>
              <td className="p-2">
                <button className="text-blue-500 hover:underline">
                  Download
                </button>
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-2">2024-06-01</td>
              <td className="p-2">STMT-002</td>
              <td className="p-2">$14,500.00</td>
              <td className="p-2">
                <button className="text-blue-500 hover:underline">
                  Download
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatementsPage;
