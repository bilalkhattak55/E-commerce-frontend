import React from 'react';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import { Counter } from './features/counter/Counter';
import './App.css';
import SignupPage from './pages/SignupPage';

//react router;
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
