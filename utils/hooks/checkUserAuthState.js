// import React from "react";
// import { gethAuth, onAuthStateChanged, } from 'firebase\auth';

// const auth = getAuth();

// export function checkUserAuthState() {
//     const [user, setUser] = React.useState();

//   React.useEffect(() => {
//     const stayLoggedIn = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(undefined);
//       }
//     });

//     return stayLoggedIn;
//   }, []);

//   return {
//     user
//   };
// }
