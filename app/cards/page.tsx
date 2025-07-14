const CardsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Cards</h1>
      <div className="bg-white p-4 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="p-2">Card Number</th>
              <th className="p-2">Driver</th>
              <th className="p-2">Vehicle</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">**** **** **** 1234</td>
              <td className="p-2">Benjamin Johannsen</td>
              <td className="p-2">KCD 123A</td>
              <td className="p-2">
                <span className="bg-green-200 text-green-800 py-1 px-2 rounded-full text-xs">
                  ACTIVE
                </span>
              </td>
              <td className="p-2">
                <button className="text-blue-500 hover:underline">
                  Edit
                </button>
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-2">**** **** **** 5678</td>
              <td className="p-2">Elizabeth Williamson</td>
              <td className="p-2">KDE 456B</td>
              <td className="p-2">
                <span className="bg-green-200 text-green-800 py-1 px-2 rounded-full text-xs">
                  ACTIVE
                </span>
              </td>
              <td className="p-2">
                <button className="text-blue-500 hover:underline">
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardsPage;
