import React, { useEffect, useRef, useState } from "react";
import "./SalesManual.css";
const SalesManual = () => {
  // list data here.........
  const items = [
    "3 Nahni Trap",
    "5 layer 1000 liter water tank",
    "Ball Valve 25MM Box 10 UPVC",
    "Ball Valve 40MM Box 3 UPVC",
    "Bearing 30210",
    "Bearing 30305",
    "Bearing 30307",
    "Bearing 30308",
    "Bearing 30308 NBC",
    "Bearing 30309 NBC",
    "Bearing 30311",
    "Bearing 32016 DTech",
    "Bearing 32206",
    "Bearing 32207 NBC",
    "Bearing 32208",
    "Bearing 32209",
    "Bearing 32209 NBC",
    "Bearing 32210 CBS",
    "Bearing 32210 NBC",
    "Bearing 32211 CBS",
    "Bearing 32211 NBC",
    "Bearing 32212",
    "Bearing 32212 NBC",
    "Bearing 32213 NBC",
    "Bearing 32214",
    "Bearing 32214 NBC",
    "Bearing 32308",
    "Bearing 32310",
    "BEARING 51113",
    "Bearing 51313 CBS",
    "Bearing 51314 CBS",
    "Bearing 51315",
    "Bearing 6004 RS HCH",
    "Bearing 6007",
    "Bearing 6012ZZ",
    "Bearing 6013 NBU",
    "Bearing 6201Z NBC",
    "Bearing 6202Z NBC",
    "Bearing 6203 ZZ",
    "Bearing 6203Z NBC",
    "Bearing 6204Z NBC",
    "Bearing 6204ZZ",
    "Bearing 6205Z NBC",
    "Bearing 6205ZZ MPZ",
    "Bearing 6206 NBC",
    "Bearing 6206ZZ",
    "Bearing Ls8",
    "Bearing MAHK 22211 MBK",
    "Bearing MAHK 22212 MBK",
    "Bearing MS 13 NBC",
    "Bearing MS10 NBC",
    "Bearing MS11 NBC",
    "Bearing MS11.5 NBC",
    "Bearing MS12 NBC",
    "Bearing MS14 NBC",
    "Bearing N210",
    "Bearing NBC - 539/ 532X",
    "Bearing NBC 6206Z",
    "Bearing Round Goli",
    "Bearing Sleave 1208S",
    "Bearing Sleave 1210K/s",
    "Bearing Sleave 1211S",
    "Bearing Sleave 1213S",
    "Bearing Sleeve 1206k",
    "Bearing Sleeve 1206S",
    "Bearing Sleeve 1208k",
    "Bearing Sleeve 1209S",
    "Bearing Sleeve 1210K",
    "Bearing Sleeve 1211k",
    "Bearing Sleeve 1212S",
    "Bearing Sleeve 1213k/s",
    "Bend  4 RingType 87.5 Deg Box 35 SWR",
    "Bend 160MM 6 Ring Type 87.5 Deg Box 12 SWR",
    "Bend 4 45 Deg Pasting Type SWR",
    "Bend 75MM 3 Ring Type 87.5 Deg Box 70 SWR",
    "Bitumen Belt Paste 1 Kg 2713",
    "Bitumen Belt Paste 20kg",
    "Bitumen Belt Paste 300 G",
    "Bitumen Belt Paste 4kg",
    "Casing Pipe 5 1250MM DN-CM Type 3 M",
    "MIRTEE 20x15 Pk 20 UPVC",
    "MP3 Grease 1kg",
    "MP3 Grease 200g",
    "MP3 Grease 500g",
    "MTA 25MM Box 500 UPVC",
    "MTA 32MM CPVC",
    "NAHNI TRAP W/O JALI 110 MM 4 Box 30 SWR",
    "P Trap Pasting Type 110x110MM Box 18 SWR",
    "P Trap Pasting Type 125x110MM Box 18 SWR",
    "Reducer 110x75 4x3 Box 35 SWR ring fit",
    "Reducer Bush 25x20 Box 500 UPVC",
    "Reducer Bush 32x25MM Box 300 UPVC",
    "Reducer Ring Type 160x110 6x4 Box 15 SWR",
    "Reducer Tee 25x20MM UPVC",
    "Rigid Agri Pipe 40MM 6Kg/cm2 3M",
    "Rigid Agri Pipe 50MM 6kg/cm2 3M",
    "Single TEE RIng Type 110MM 4 Box 25 SWR",
    "Single TEE W Door RIng Type 110MM 4 Box 20 SWR",
    "Step Over Bend 25mm CPVC",
    "Swept Tee Ring Type 160MM 6 Box 6 SWR",
    "SWR 3 75 MM Ringtype A 3M Single Socket",
    "SWR 4 110 MM Ringtype A 3M Single Socket",
    "Tank Connector 25MM Box 50 UPVC",
    "Tank Connector 25mm Pk 25 CPVC",
    "TEE 25MM Pk 25 CPVC",
    "TEE 32mm UPVC (100)",
    "Tee 50MM Rigid Agri PVC",
    "UCP 205-16 FKD",
    "UCP 205/16 HGMT",
    "UCP 206 FKD",
    "UCP 208-24 DWZY",
    "UCP 208/24 HGMT",
    "UCP 211 FKD",
    "UCT 210 FKD",
    "Union 25MM Box 100 UPVC",
    "Union 25MM Pk 25 CPVC",
    "UPVC 15 mm SCH-40 3 M Pack 50",
    "UPVC 20MM SCH-40 3M Pack 25",
    "UPVC 25 mm SCH-40 3 M Pack 25",
    "UPVC 32 MM SCH-40 3 M Pack 15",
  ];
  // Drawer useState .......
  const [isDrawerOpen, setDrawerOpen] = useState(false);
   // Search items useState .......
  const [searchTerm, setSearchTerm] = useState("");
  const drawerRef = useRef(null);
// opening Drawer code
  const openDrawer = () => {
    setDrawerOpen(true);
  };
  // closing Drawer code
  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        closeDrawer();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="bg-yellow-50 100vh border p-1">
      {/* the upper part of the table */}
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
          <span className="italic text-gray-600 font-semibold">
            voucher class{" "}
          </span>
          <span className="ms-9 font-bold"> : Sales</span>
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <p className="font-semibold">
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
              <th className=" text-left w-4/12">Name of the item</th>
              <th className=" text-left border-s">HSN/SAC Code</th>
              <th className=" text-center border-s border-e w-28">GST%</th>
              <th className=" text-center">Quantity</th>
              <th className=" text-center">
                Rate <br />
                (incl. of Tax)
              </th>
              <th className=" text-">Rate</th>
              <th className=" text-center">per</th>
              <th className=" text-center">Dis %</th>
              <th className=" w-32 text-end">Amount</th>
            </tr>
          </thead>
          {isDrawerOpen && (
            <div
              ref={drawerRef}
              className="fixed top-0 right-96 flex items-center justify-center "
              style={{ zIndex: 100 }}
            >
              <div className="the-list">
                <div
                  className="text-start ps-2 border bg-purple-100 w-80"
                  style={{ overflow: "hidden" }}
                >
                  <p className="bg-blue-800 text-white ps-2 font-semibold">
                    List of the Stock Items
                  </p>
                  <p className="bg-gray-400 ps-2 font-semibold">
                    Item Name &#x25B2;
                  </p>
                  <ul style={{ overflowY: "scroll", maxHeight: "650px" }}>
                    {items
                      .filter((item) => {
                        const lowerCaseItem = item.toLowerCase();
                        const lowerCaseSearchTerm = searchTerm.toLowerCase();
                        const mappedSearchTerm =
                          lowerCaseSearchTerm === "beg" ||
                          lowerCaseSearchTerm === "bng" ||
                          lowerCaseSearchTerm === "barig" ||
                          lowerCaseSearchTerm === "bari" ||
                          lowerCaseSearchTerm === "bar"
                            ? "bearing"
                            : lowerCaseSearchTerm;
                        return lowerCaseItem.includes(mappedSearchTerm);
                      })
                      .map((item, index) => (
                        <li key={index} className="hover:bg-red-300">
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
          {/* table codes starts from here */}
          <tbody className="text-sm font-bold">
            <tr className="">
              <td className=" text-start">
                <input
                  className="bg-transparent text-start p-1 w-full"
                  type="text"
                  defaultValue="16' v/d GM"
                  onClick={openDrawer}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </td>
              <td className="text-center w-28">
                <input
                  className="w-full bg-transparent text-center p-1 border-s border-e border-b"
                  type="text"
                  defaultValue="8437"
                />
              </td>
              <td className="text-center w-28">
                <input
                  className="w-full bg-transparent text-center p-1 border-s border-e border-b"
                  type="text"
                  defaultValue="18%"
                />
              </td>
              <td className="text-center w-20">
                <input
                  className="w-20 bg-transparent text-center p-1"
                  type="text"
                  defaultValue="3.0 Pair"
                />
              </td>
              <td className="text-center w-24">
                <input
                  className="w-24 bg-transparent text-center p-1"
                  type="text"
                  defaultValue="4800.00"
                />
              </td>
              <td className="text-center w-24">
                <input
                  className="w-24 bg-transparent text-center p-1"
                  type="text"
                  defaultValue="4067.80"
                />
              </td>
              <td className="text-center w-20">
                <input
                  className="w-20 bg-transparent text-center p-1"
                  type="text"
                  defaultValue="Pair"
                />
              </td>
              <td className="text-end w-20">
                <input
                  className="w-20 bg-transparent text-end p-1"
                  type="text"
                  defaultValue=""
                />
              </td>
              <td className="text-end w-20">
                <input
                  className="w-20 bg-transparent text-end p-1"
                  type="text"
                  defaultValue="4,067.80"
                />
              </td>
            </tr>
            <tr className="">
              <td className=" text-start">
                <input
                  className="bg-transparent text-start p-1  w-full"
                  type="text"
                  defaultValue='Belt Fastener 2.5/8"'
                  onClick={openDrawer}
                />
              </td>
              <td className="text-center w-28">
                <input
                  className="w-full bg-transparent text-center p-1 border-s border-e border-b"
                  type="text"
                  defaultValue="7326"
                />
              </td>
              <td className="text-center w-28">
                <input
                  className="w-full bg-transparent text-center p-1 border-s border-e border-b"
                  type="text"
                  defaultValue="18%"
                />
              </td>
              <td className="text-center w-20">
                <input
                  className="w-20 bg-transparent text-center p-1"
                  type="text"
                  defaultValue="40.0 Pcs"
                />
              </td>
              <td className="text-center w-24">
                <input
                  className="w-24 bg-transparent text-center p-1"
                  type="text"
                  defaultValue="9.99"
                />
              </td>
              <td className="text-center w-24">
                <input
                  className="w-24 bg-transparent text-center p-1"
                  type="text"
                  defaultValue="8.47"
                />
              </td>
              <td className="text-center w-20">
                <input
                  className="w-20 bg-transparent text-center p-1"
                  type="text"
                  defaultValue="Pcs"
                />
              </td>
              <td className="text-end w-20">
                <input
                  className="w-20 bg-transparent text-end p-1"
                  type="text"
                  defaultValue=""
                />
              </td>
              <td className="text-end w-20">
                <input
                  className="w-20 bg-transparent text-end p-1"
                  type="text"
                  defaultValue="338.80"
                />
              </td>
            </tr>
            <tr className="">
              <td className=" text-start">
                <input
                  className="bg-transparent text-start p-1  w-full"
                  type="text"
                  defaultValue='Belt Fastener 3/8"'
                  onClick={openDrawer}
                />
              </td>
              <td className="text-center w-28">
                <input
                  className="w-full bg-transparent text-center p-1 border-s border-e border-b"
                  type="text"
                  defaultValue="7326"
                />
              </td>
              <td className="text-center w-28">
                <input
                  className="w-full bg-transparent text-center p-1 border-s border-e border-b"
                  type="text"
                  defaultValue="18%"
                />
              </td>
              <td className="text-center w-20">
                <input
                  className="w-20 bg-transparent text-center p-1"
                  type="text"
                  defaultValue="3.0 Pcs"
                />
              </td>
              <td className="text-center w-24">
                <input
                  className="w-24 bg-transparent text-center p-1"
                  type="text"
                  defaultValue="12.33"
                />
              </td>
              <td className="text-center w-24">
                <input
                  className="w-24 bg-transparent text-center p-1"
                  type="text"
                  defaultValue="10.45"
                />
              </td>
              <td className="text-center w-20">
                <input
                  className="w-20 bg-transparent text-center p-1"
                  type="text"
                  defaultValue="Pcs"
                />
              </td>
              <td className="text-end w-20">
                <input
                  className="w-20 bg-transparent text-end p-1"
                  type="text"
                  defaultValue=""
                />
              </td>
              <td className="text-end w-20 border-b">
                <input
                  className="w-20 bg-transparent text-end p-1"
                  type="text"
                  defaultValue="31.35"
                />
              </td>
            </tr>
            <tr className="">
              <td className="text-left 4"></td>
              <td className="text-left border-s"></td>
              <td className="text-left border-s border-e"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-end w-20 ">
                <input
                  className="w-20 bg-transparent text-end p-1"
                  type="text"
                  defaultValue="4,437.95"
                />
              </td>
            </tr>
            <tr className="">
              <td className=" text-start">
                <input
                  className="bg-transparent text-start p-1  w-full"
                  type="text"
                  defaultValue="CGST"
                />
              </td>
              <td className="text-left border-s"></td>
              <td className="text-left border-s border-e"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-end w-20 ">
                <input
                  className="w-20 bg-transparent text-end p-1"
                  type="text"
                  defaultValue="399.41"
                />
              </td>
            </tr>
            <tr className="">
              <td className=" text-start">
                <input
                  className="bg-transparent text-start p-1  w-full"
                  type="text"
                  defaultValue="SGST"
                />
              </td>
              <td className="text-left border-s"></td>
              <td className="text-left border-s border-e"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-end w-20 ">
                <input
                  className="w-20 bg-transparent text-end p-1"
                  type="text"
                  defaultValue="399.41"
                />
              </td>
            </tr>
            <tr className="">
              <td className=" text-start">
                <input
                  className="bg-transparent text-start p-1  w-full"
                  type="text"
                  defaultValue="Round off"
                />
              </td>
              <td className="text-left border-s"></td>
              <td className="text-left border-s border-e"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-end w-20 ">
                <input
                  className="w-20 bg-transparent text-end p-1"
                  type="text"
                  defaultValue="0.23"
                />
              </td>
            </tr>
            <tr className="">
              <td className="text-left 4">
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
              <td className="text-left 4">
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
              <td className="text-left 4">
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
              <td className="text-left 4">
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
              <td className="text-left 4">
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
              <td className="text-left 4">
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
              <td className="text-left 4">
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
              <td className="text-left 4">
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
              <td className="text-left 4">
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
              <td className="text-left 4">
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
              <td className="text-left 4">
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
              <td className=" text-start font-semibold">
                <input
                  className="bg-transparent text-start p-1  w-full"
                  type="text"
                  defaultValue="Narration:"
                />
              </td>
              <td className="text-left border-s"></td>
              <td className="text-left border-s border-e"></td>
              <td className="text-left border-t"></td>
              <td className="text-left border-t"></td>
              <td className="text-left border-t"></td>
              <td className="text-left border-t"></td>
              <td className="text-left border-t"></td>
              <td className="text-end w-20 border-t">
                <input
                  className="w-20 bg-transparent text-end p-1"
                  type="text"
                  defaultValue="5,237.00"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default SalesManual;
