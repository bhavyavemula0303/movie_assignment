import './App.css';
import Login from "./login/Login";
import Signup from "./signup/Signup";
import List from './list/List';

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { RouterProvider,createBrowserRouter } from 'react-router-dom';


function App() {
  // const route=createBrowserRouter ([
  //    {
  //     path:"/",
  //     element: <Signup />,
  //    },
  //    {
  //     path:"/login",
  //     element: <Login />,
  //    },
  //    {
  //     path:"/list",
  //     element: <List />,
  //    }
  // ])
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/List" element={<List />} />
        </Routes>
      </BrowserRouter>
      {/* <RouterProvider router={route}></RouterProvider> */}
    </div>
  );
}

export default App;
