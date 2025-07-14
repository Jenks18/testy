const DriversPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Drivers</h1>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search by name or ID..."
          className="border p-2 rounded-lg"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add New Driver
        </button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">ID</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Vehicle Assigned</th>
            <th className="border p-2">Efficiency Score</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">John Doe</td>
            <td className="border p-2">12345</td>
            <td className="border p-2">0712345678</td>
            <td className="border p-2">KCD 123A</td>
            <td className="border p-2">A</td>
            <td className="border p-2">
              <button className="text-blue-500 hover:underline">View</button>
            </td>
          </tr>
          <tr>
            <td className="border p-2">Jane Smith</td>
            <td className="border p-2">54321</td>
            <td className="border p-2">0787654321</td>
            <td className="border p-2">KDE 456B</td>
            <td className="border p-2">B</td>
            <td className="border p-2">
              <button className="text-blue-500 hover:underline">View</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DriversPage;
