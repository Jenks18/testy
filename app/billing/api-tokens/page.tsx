const ApiTokensPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage API Tokens</h1>
      <div className="bg-white p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Active Tokens</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Generate New Token
          </button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="p-2">Token</th>
              <th className="p-2">Created On</th>
              <th className="p-2">Last Used</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">fl_live_******************</td>
              <td className="p-2">2024-01-01</td>
              <td className="p-2">2024-07-28</td>
              <td className="p-2">
                <button className="text-red-500 hover:underline">
                  Revoke
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApiTokensPage;
