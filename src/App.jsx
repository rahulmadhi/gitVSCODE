// // // react router 5 version

// // import React from "react";
// // import Navbar from "./component/navbar/Navbar";
// // import { BrowserRouter, Route, Switch } from "react-router-dom";
// // import Home from "./component/home/Home";
// // import Profile from "./component/profile/Profile";
// // import Login from "./component/auth/Login";
// // import Register from "./component/auth/Register";
// // import NotFound from "./component/Notfound/NotFound";

// // const App = () => {
// //   return (
// //     <div>
// //       <BrowserRouter>
// //         <Navbar />
// //         <Switch>
// //           <Route path="/" component={Home} exact />
// //           <Route path="/profile" component={Profile} exact />
// //           <Route path="/login" component={Login} exact />
// //           <Route path="/register" component={Register} exact />
// //           <Route path="*" component={NotFound} exact />
// //         </Switch>
// //       </BrowserRouter>
// //     </div>
// //   );
// // };

// // export default App;

// // one more way  // react router 5 version -- -------------------------------------------------------------

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Switch>
//           <Route path="/" exact>
//             <Home />
//           </Route>
//           <Route path="/login" exact>
//             <Login />
//           </Route>
//           <Route path="Register" exact>
//             <Register />
//           </Route>
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;

// react router 6 version -------------------------------------------------------------

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./component/navbar/Navbar";
// import Home from "./component/home/Home";
// import Login from "./component/auth/Login";
// import NotFound from "./component/Notfound/NotFound";
// import Register from "./component/auth/Register";

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

//-- useParams() hook ----------------------------------------------------

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/home/Home";
import Login from "./component/auth/Login";
import NotFound from "./component/Notfound/NotFound";
import Register from "./component/auth/Register";
import { useParams } from "react-router-dom";
import Product from "./component/products/Product";

const App = () => {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
