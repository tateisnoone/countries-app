import React from "react";
import { Header } from "#/Header";
import { Footer } from "#/Footer";
import { Outlet } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
