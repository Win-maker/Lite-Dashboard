// import { Dashboard } from './components/Dashboard'

// const mockSales = [
//   { id: 1, shop: "Shop A", category: "Food", amount: 100 },
//   { id: 2, shop: "Shop A", category: "Drink", amount: 50 },
//   { id: 3, shop: "Shop B", category: "Food", amount: 200 },
//   { id: 4, shop: "Shop B", category: "Drink", amount: 70 },
//   { id: 5, shop: "Shop A", category: "Food", amount: 350 },
//   { id: 6, shop: "Shop C", category: "Drink", amount: 90 },
//   { id: 7, shop: "Shop C", category: "Food", amount: 180 },
// ];

import { Dashboard } from "./components/Dashboard";
// import {
//   countBy,
//   sumBy,
//   averageBy,
//   minBy,
//   maxBy,
// } from "./components/utils/dataUtils";

// const sectionStyle: React.CSSProperties = {
//   padding: "16px",
//   border: "1px solid #ddd",
//   borderRadius: "10px",
//   background: "#fafafa",
// };

function App() {
  // const sumByCategory = sumBy(mockSales, "category", "amount");

  // const countByCategory = countBy(mockSales, "category");

  // const countByShop = countBy(mockSales, "shop");
  // const sumByShop = sumBy(mockSales, "shop", "amount");

  // const avgByCategory = averageBy(mockSales, "category", "amount");

  // const avgByShop = averageBy(mockSales, "shop", "amount");

  // const minValueOfShop = minBy(mockSales, "shop", "amount");

  // const maxValueOfShop = maxBy(mockSales, "shop", "amount");

  // const th: React.CSSProperties = {
  //   padding: "8px",
  //   textAlign: "left",
  //   borderBottom: "1px solid #ccc",
  // };

  // const td = {
  //   padding: "8px 12px",
  //   borderBottom: "1px solid #eee",
  // };

  return (
    // <main className="contiaer w-full h-screen flex justify-between items-center gap-10">
    //   <div className="w-1/2">
    //     <h1>Mock Sales Table</h1>

    //     <table style={{ width: "100%", borderCollapse: "collapse" }}>
    //       <thead>
    //         <tr style={{ background: "#f5f5f5" }}>
    //           <th style={th}>ID</th>
    //           <th style={th}>Shop</th>
    //           <th style={th}>Category</th>
    //           <th style={th}>Amount</th>
    //         </tr>
    //       </thead>

    //       <tbody>
    //         {mockSales.map((item) => (
    //           <tr key={item.id}>
    //             <td style={td}>{item.id}</td>
    //             <td style={td}>{item.shop}</td>
    //             <td style={td}>{item.category}</td>
    //             <td style={td}>{item.amount}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    //   <div
    //     style={{
    //       display: "grid",
    //       gridTemplateColumns: "repeat(4, 1fr)",
    //       gridTemplateRows: "repeat(2, auto)",
    //       gap: "24px",
    //       marginTop: "20px",
    //     }}
    //   >
    //     {/* 🔹 Section 1 */}
    //     <section style={sectionStyle}>
    //       <h2 className="text-bold text-orange-400">Sum By Category</h2>
    //       {sumByCategory.map((item) => (
    //         <p key={item.key}>
    //           {item.key}: {item.total}
    //         </p>
    //       ))}
    //     </section>

    //     {/* 🔹 Section 2 */}
    //     <section style={sectionStyle}>
    //       <h2 className="font-bold text-yellow-400">Count By Category</h2>
    //       {countByCategory.map((item) => (
    //         <p key={item.key}>
    //           {item.key}: {item.count}
    //         </p>
    //       ))}
    //     </section>

    //     {/* 🔹 Section 3 */}
    //     <section style={sectionStyle}>
    //       <h2 className="font-bold text-green-400">Sum By Shop</h2>
    //       {sumByShop.map((item) => (
    //         <p key={item.key}>
    //           {item.key}: {item.total}
    //         </p>
    //       ))}
    //     </section>

    //     {/* 🔹 Section 4 */}
    //     <section style={sectionStyle}>
    //       <h2 className="font-bold text-violet-400">Count By Shop</h2>
    //       {countByShop.map((item) => (
    //         <p key={item.key}>
    //           {item.key}: {item.count}
    //         </p>
    //       ))}
    //     </section>

    //     {/* 🔹 Section 5 */}
    //     <section style={sectionStyle}>
    //       <h2 className="font-bold text-red-400">Average By Category</h2>
    //       {avgByCategory.map((item) => (
    //         <p key={item.key}>
    //           {item.key}: {item.average}
    //         </p>
    //       ))}
    //     </section>

    //     {/* 🔹 Section 6 */}
    //     <section style={sectionStyle}>
    //       <h2>Average By Shop</h2>
    //       {avgByShop.map((item) => (
    //         <p key={item.key}>
    //           {item.key}: {item.average}
    //         </p>
    //       ))}
    //     </section>

    //     {/* 🔹 Section 6 */}
    //     <section style={sectionStyle}>
    //       <h2 className="text-orange-600">Minimum Amount Of Shop</h2>
    //       {minValueOfShop.map((item) => (
    //         <p key={item.key}>
    //           {item.key}: {item.min}
    //         </p>
    //       ))}
    //     </section>

    //     {/* 🔹 Section 6 */}
    //     <section style={sectionStyle}>
    //       <h2 className="text-blue-400">Maximum Amount Of Shop</h2>
    //       {maxValueOfShop.map((item) => (
    //         <p key={item.key}>
    //           {item.key}: {item.max}
    //         </p>
    //       ))}
    //     </section>
    //   </div>
    // </main>
    <Dashboard/>
  );
}

export default App;
