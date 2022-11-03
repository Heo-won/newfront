// import React, { useRef } from "react";
// import { SpeedDialIcon } from "@mui/material";

// const actions = [
//   {
//     icon: <Add />,
//     name: "Product",
//     action: handleDialogOpen,
//     operation: "product",
//   },
//   { icon: <Label />, name: "Tag", action: handleDialogOpen, operation: "tag" },
// ];

// //handler function
// function handleClick(e, operation) {
//   e.preventDefault();
//   if (operation == "product") {
//     // do something
//   } else if (operation == "tag") {
//     //do something else
//   }
//   setOpen(!open); // to close the speed dial, remove this line if not needed.
// }

// export default function SpeedDial() {
//   return (
//     <>
//       <SpeedDial
//         ariaLabel="SpeedDial example"
//         className={classes.speedDial}
//         icon={<SpeedDialIcon />}
//         onBlur={handleClose}
//         onClick={handleClick}
//         onClose={handleClose}
//         onFocus={handleOpen}
//         onMouseEnter={handleOpen}
//         onMouseLeave={handleClose}
//         open={open}
//       >
//         {actions.map((action) => (
//           <SpeedDialAction
//             tooltipOpen
//             key={action.name}
//             icon={action.icon}
//             tooltipTitle={action.name}
//             onClick={(e) => {
//               handleClick(e.action.operation);
//             }}
//           />
//         ))}
//       </SpeedDial>
//     </>
//   );
// }
