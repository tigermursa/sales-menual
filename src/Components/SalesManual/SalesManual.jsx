import React from "react";
import "./SalesManual.css";
const SalesManual = () => {
  return (
    <div className="bg-yellow-50 100vh border p-1">
      <div className="flex justify-between">
        <div className="flex items-center mt-0 gap-1 font-semibold">
          <p className="me-7 bg-blue-800 text-white ps-2 pe-2">Sales_Manual</p>
          No.
          <input
            className="bg-yellow-100 border border-blue-700"
            type="number"
          />
        </div>
        <div className="font-bold">
          <p>5-Apr-123</p>
          <p>Wednesday</p>
        </div>
      </div>
      <div>
        <p>
          {" "}
          <span className="italic text-gray-600">voucher class </span>
          <span className="ms-9 font-bold"> : Sales</span>
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <p>
            Party A/c name <span className="ms-3 me-2"> :</span>
          </p>
          <p className="font-bold"> Online Transfer Customer</p>
        </div>
        <div className=" me-40 font-bold">
          Price Level <span className="ms-10">:</span>
        </div>
      </div>
      <div className="flex items-center italic text-gray-500 font-semibold">
        <p>
          Current balance <span className="ms-2 me-2"> :</span>
        </p>
        <p className=""> 30,7212497 Dr</p>
      </div>
      <div className="flex items-center">
        <p>
          Sales ledger <span className="ms-9 me-2"> :</span>
        </p>
        <p className="font-bold"> GST Sales</p>
      </div>
      <div className="flex items-center italic text-gray-500 font-semibold">
        <p>
          Current balance <span className="ms-2 me-2"> :</span>
        </p>
        <p className=""> 82,71260,99 Cr</p>
      </div>
      <div className="">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className=" text-sm leading-normal border">
              <th className=" text-left w-5/12">Name of the item</th>
              <th className=" text-left border-s">HSN/SAC Code</th>
              <th className=" text-center border-s border-e w-28">GST%</th>
              <th className=" text-center">Quantity</th>
              <th className=" text-center">
                Rate <br />
                (incl. of Tax)
              </th>
              <th className=" text-">Rate per</th>
              <th className=" text-left">per</th>
              <th className=" text-left">Dis %</th>
              <th className=" w-32 text-end">Amount</th>
            </tr>
          </thead>
          <tbody className="text-sm font-bold">
            <tr className="">
              <td className="text-left w-5/12">16&quot; v/d GM</td>
              <td className="text-center border-s border-b">8437</td>
              <td className="text-center border-s border-e border-b">18%</td>
              <td className="text-center">
                <input
                  className="w-20 bg-transparent text-end p-1"
                  type="text"
                  defaultValue="3.0 Pair"
                />
              </td>
              <td className="text-center">4800.00</td>
              <td className="text-center">4067.80</td>
              <td className="text-center">Pair</td>
              <td className="text-center"></td>
              <td className="text-end ">4,067.80</td>
            </tr>
            <tr className="">
              <td className="text-left w-5/12">Belt Fastener 2.5/8&quot;</td>
              <td className="text-center border-s border-b">7326</td>
              <td className="text-center border-s border-e border-b">18%</td>
              <td className="text-center">
                <input
                  className="w-20 bg-transparent text-end p-1"
                  type="text"
                  defaultValue="3.0 Pair"
                />
              </td>
              <td className="text-center">9.99</td>
              <td className="text-center">8.47</td>
              <td className="text-center">Pcs</td>
              <td className="text-left"></td>
              <td className="text-end">338.80</td>
            </tr>
            <tr className="">
              <td className="text-left w-5/12">Belt Fastener 3/8&quot;</td>
              <td className="text-center border-s border-b">7326</td>
              <td className="text-center border-s border-e border-b">18%</td>
              <td className="text-center">
                <input
                  className="w-20 bg-transparent text-end p-1"
                  type="text"
                  defaultValue="3.0 Pair"
                />
              </td>
              <td className="text-center">12.33</td>
              <td className="text-center">10.45</td>
              <td className="text-center">Pcs</td>
              <td className="text-left"></td>
              <td className="text-end border-b">31.35</td>
            </tr>
            <tr className="">
              <td className="text-left w-5/12"></td>
              <td className="text-left border-s"></td>
              <td className="text-left border-s border-e"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-end">4,437.95</td>
            </tr>
            <tr className="">
              <td className="text-left w-5/12">CGST</td>
              <td className="text-left border-s"></td>
              <td className="text-left border-s border-e"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-end">399.41</td>
            </tr>
            <tr className="">
              <td className="text-left w-5/12">SGST</td>
              <td className="text-left border-s"></td>
              <td className="text-left border-s border-e"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-end">399.41</td>
            </tr>
            <tr className="">
              <td className="text-left w-5/12">SGST</td>
              <td className="text-left border-s"></td>
              <td className="text-left border-s border-e"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-end">0.23</td>
            </tr>
            <tr className="">
              <td className="text-left w-5/12">
                <span className="visually-hidden">1</span>
              </td>
              <td className="text-left border-s"></td>
              <td className="text-left border-s border-e"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-end"></td>
            </tr>
            <tr className="">
              <td className="text-left w-5/12">
                <span className="visually-hidden">1</span>
              </td>
              <td className="text-left border-s"></td>
              <td className="text-left border-s border-e"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-end"></td>
            </tr>
            <tr className="">
              <td className="text-left w-5/12">
                <span className="visually-hidden">1</span>
              </td>
              <td className="text-left border-s"></td>
              <td className="text-left border-s border-e"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-end"></td>
            </tr>
            <tr className="">
              <td className="text-left w-5/12">
                <span className="visually-hidden">1</span>
              </td>
              <td className="text-left border-s"></td>
              <td className="text-left border-s border-e"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-end"></td>
            </tr>
            <tr className="">
              <td className="text-left w-5/12">
                <span className="visually-hidden">1</span>
              </td>
              <td className="text-left border-s"></td>
              <td className="text-left border-s border-e"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-end"></td>
            </tr>
            <tr className="">
              <td className="text-left w-5/12">
                <span className="visually-hidden">1</span>
              </td>
              <td className="text-left border-s"></td>
              <td className="text-left border-s border-e"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-end"></td>
            </tr>
            <tr className="">
              <td className="text-left w-5/12">
                <span className="visually-hidden">1</span>
              </td>
              <td className="text-left border-s"></td>
              <td className="text-left border-s border-e"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-end"></td>
            </tr>
            <tr className="">
              <td className="text-left w-5/12">
                <span className="visually-hidden">1</span>
              </td>
              <td className="text-left border-s"></td>
              <td className="text-left border-s border-e"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-end"></td>
            </tr>
            <tr className="">
              <td className="text-left w-5/12">
                <span className="visually-hidden">1</span>
              </td>
              <td className="text-left border-s"></td>
              <td className="text-left border-s border-e"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-end"></td>
            </tr>
            <tr className="">
              <td className="text-left w-5/12">
                <span className="visually-hidden">1</span>
              </td>
              <td className="text-left border-s"></td>
              <td className="text-left border-s border-e"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-end"></td>
            </tr>
            <tr className="">
              <td className="text-left w-5/12">
                <span className="visually-hidden">1</span>
              </td>
              <td className="text-left border-s"></td>
              <td className="text-left border-s border-e"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-end"></td>
            </tr>
            <tr className="">
              <td className="text-left w-5/12 font-semibold">Narration:</td>
              <td className="text-left border-s"></td>
              <td className="text-left border-s border-e"></td>
              <td className="text-left border-t"></td>
              <td className="text-left border-t"></td>
              <td className="text-left border-t"></td>
              <td className="text-left border-t"></td>
              <td className="text-left border-t"></td>
              <td className="text-end border-t italic">5,237.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesManual;
