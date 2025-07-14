const PayrollOverview = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Payroll Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="border p-4 rounded-lg bg-white">
          <h2 className="text-lg font-semibold mb-2">
            Instant Payment Funding Source
          </h2>
          <p>Mastercard **** 8171</p>
          <p>Exp: 8/2025</p>
        </div>
        <div className="border p-4 rounded-lg bg-white">
          <h2 className="text-lg font-semibold mb-2">
            Bank Transfer (ACH) Funding Source
          </h2>
          <p>JP Morgan Chase</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="p-2">Driver Name</th>
              <th className="p-2">1099/W2</th>
              <th className="p-2">Debit Card</th>
              <th className="p-2">Instant Payout</th>
              <th className="p-2">Quick Pay</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">Benjamin Johannsen</td>
              <td className="p-2">Unselected</td>
              <td className="p-2">8171</td>
              <td className="p-2 text-green-600">$0.00</td>
              <td className="p-2">$0.00</td>
              <td className="p-2">
                <span className="bg-yellow-200 text-yellow-800 py-1 px-2 rounded-full text-xs">
                  PENDING
                </span>
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-2">Elizabeth Williamson</td>
              <td className="p-2">Unselected</td>
              <td className="p-2">9345</td>
              <td className="p-2 text-green-600">$0.00</td>
              <td className="p-2">$0.00</td>
              <td className="p-2">
                <span className="bg-yellow-200 text-yellow-800 py-1 px-2 rounded-full text-xs">
                  PENDING
                </span>
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-2">Juan Villareal</td>
              <td className="p-2">Unselected</td>
              <td className="p-2">8787</td>
              <td className="p-2 text-green-600">$0.00</td>
              <td className="p-2">$0.00</td>
              <td className="p-2">
                <span className="bg-yellow-200 text-yellow-800 py-1 px-2 rounded-full text-xs">
                  PENDING
                </span>
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-2">James Newton</td>
              <td className="p-2">Unselected</td>
              <td className="p-2">3352</td>
              <td className="p-2 text-green-600">$0.00</td>
              <td className="p-2">$0.00</td>
              <td className="p-2">
                <span className="bg-yellow-200 text-yellow-800 py-1 px-2 rounded-full text-xs">
                  PENDING
                </span>
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-2">Leslie Stephenson</td>
              <td className="p-2">Unselected</td>
              <td className="p-2">7713</td>
              <td className="p-2 text-green-600">$0.00</td>
              <td className="p-2">$0.00</td>
              <td className="p-2">
                <span className="bg-yellow-200 text-yellow-800 py-1 px-2 rounded-full text-xs">
                  PENDING
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayrollOverview;
