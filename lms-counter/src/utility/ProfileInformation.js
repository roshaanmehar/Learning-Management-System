// import React from "react";
// import "./Utility.css";
// const ProfileInformation = () => {
//   return (
//     <div
//       style={{
//         boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
//         display: "flex",
//         justifyContent: "center",
//         backgroundColor: "white",
//         border: "1px solid #ccc",
//         overflow: "hidden",
//         height: "50%",
//         lineHeight: "normal",
//         borderRadius: "10px",
//         margin: "20px",

//         alignContent: "left",
//         width: "45%",
//       }}
//     >
//       <div style={{ lineHeight: "normal", display: "inline-block" }}>
//         <h2>General Information</h2>
//       </div>
//       <div style={{display:"block"}}>
//         <table
//           border="1"
//           style={{
//             margin: "10px",
//             width: "100%",
//             border: "1px solid #ebebeb !important",
//             borderCollapse: "collapse",
//           }}
//           className="personalinfo"
//         >
//           <tbody>
//             <tr>
//               <td>
//                 <b>Father Name</b>
//               </td>
//               <td>Abdul Wahid</td>
//             </tr>
//             <tr>
//               <td>
//                 <b>CNIC</b>
//               </td>
//               <td>3640262117387</td>
//             </tr>
//             <tr>
//               <td>
//                 <b>Phone no.</b>
//               </td>
//               <td>
//                 03238810565 <i>(edit)</i>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <b>Email</b>
//               </td>
//               <td>
//                 being.talal@gmail.com <i>(edit)</i>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <b>Gender</b>
//               </td>
//               <td>MALE</td>
//             </tr>
//             <tr>
//               <td>
//                 <b>Religion</b>
//               </td>
//               <td>Islam</td>
//             </tr>
//             <tr>
//               <td>
//                 <b>Address</b>
//               </td>
//               <td>193 R BLOCK MODEL TOWN LAHORE</td>
//             </tr>
//             <tr>
//               <td>
//                 <b>Department</b>
//               </td>
//               <td>MANAGEMENT STUDIES</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ProfileInformation;
import React from "react";
import "./Utility.css"; // Assuming you have a CSS file for additional styling

const ProfileInformation = () => {
  return (
    <div
      style={{
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "10px",
        margin: "20px",
        justifyContent: "center",
        overflow: "hidden",
        height: "50%",
        lineHeight: "normal",

        alignContent: "left",
        width: "45%",
      }}
    >
      {/* General Information Heading */}
      <div style={{ padding: "10px" }}>
        <h2>General Information</h2>
      </div>

      {/* Table */}
      <table
        border="1"
        style={{
          margin: "10px",
          width: "calc(100% - 20px)", // Adjusted width to accommodate margins
          borderCollapse: "collapse",
        }}
        className="personalinfo"
      >
        <tbody>
          {/* Table rows */}
          <tr>
            <td><b>Father Name</b></td>
            <td>Abdul Wahid</td>
          </tr>
          <tr>
            <td><b>CNIC</b></td>
            <td>3640262117387</td>
          </tr>
          <tr>
            <td><b>Phone no.</b></td>
            <td>03238810565 <i>(edit)</i></td>
          </tr>
          <tr>
            <td><b>Email</b></td>
            <td>being.talal@gmail.com <i>(edit)</i></td>
          </tr>
          <tr>
            <td><b>Gender</b></td>
            <td>MALE</td>
          </tr>
          <tr>
            <td><b>Religion</b></td>
            <td>Islam</td>
          </tr>
          <tr>
            <td><b>Address</b></td>
            <td>193 R BLOCK MODEL TOWN LAHORE</td>
          </tr>
          <tr>
            <td><b>Department</b></td>
            <td>MANAGEMENT STUDIES</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProfileInformation;
