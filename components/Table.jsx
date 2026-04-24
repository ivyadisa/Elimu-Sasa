export default function Table({ columns = [], data = [] }) {
  return (
    <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl">
      <table className="w-full text-left">
        <thead className="bg-gray-50 border-b">
          <tr>
            {columns.map((col, i) => (
              <th key={i} className="p-3 text-sm font-semibold text-gray-700">
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              {Object.values(row).map((cell, j) => (
                <td key={j} className="p-3 text-gray-700 text-sm">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}