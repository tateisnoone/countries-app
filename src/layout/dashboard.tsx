import React from "react";
import { Header } from "#/Header";
import { Footer } from "#/Footer";

const Dashboard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Dashboard;
