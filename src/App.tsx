import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login";
import "antd/dist/antd.css";
import PublicAppLayout from "./PublicAppLayout";
import PrivateRoute from "./CustomRoute/PrivateRoute";
import Navbar from "./Components/NavBar/Navbar";
import Users from "./Pages/Users/Users";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <React.Fragment>
            <Route
              path="/users"
              element={
                <PrivateRoute>
                  <Navbar />
                  <Users />
                </PrivateRoute>
              }
            />
            <Route
              path="/"
              element={
                localStorage.getItem("is-authenticated") ? (
                  <Navigate to="/users" />
                ) : (
                  <PublicAppLayout>
                    <Login />
                  </PublicAppLayout>
                )
              }
            />
          </React.Fragment>
        </Routes>
      </div>
    </Router>
  );
}

