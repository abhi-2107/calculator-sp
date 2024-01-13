import React from "react";

function Table({  calcPricesArray }) {
  const trTable = calcPricesArray.map((result, index) => (
    <tr key={index}>
      <td className="border border-slate-700 px-3 py-2">{result.price}</td>
      <td className="border border-slate-700 px-3 py-2">{result.mulResult}</td>
      <td className="border border-slate-700 px-3 py-2">{(result.divResult).toFixed(2)}</td>
      <td className="border border-slate-700 px-3 py-2">
        x{result.mulFactor} & /{result.divFactor}
      </td>
    </tr>
  ));
  return (
    <>
      <table className="table-auto border-collapse border border-spacing-1 border-slate-500 ">
        <thead >
          <tr className="p-3">
            <th className="border border-slate-600 px-3 py-2">price</th>
            <th className="border border-slate-600 px-3 py-2"> price X</th>
            <th className="border border-slate-600 px-3 py-2">price /</th>
            <th className="border border-slate-600 px-3 py-2">Mul & Div</th>
          </tr>
        </thead>
        <tbody className="p-3">{trTable}</tbody>
      </table>
    </>
  );
}

export default Table;
