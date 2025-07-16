import { motion } from "framer-motion";
import { useState } from "react";
import { FiTrendingUp, FiUsers, FiGift } from "react-icons/fi";

const FundingOverview = () => {
  const totalFunds = 12500;
  const fundingGoal = 20000;
  const progressPercentage = (totalFunds / fundingGoal) * 100;

  // Sample recent donations
  const recentDonations = [
    { id: 1, name: "John Doe", amount: 500, method: "Online Transfer" },
    { id: 2, name: "Eco Foundation", amount: 2500, method: "Corporate Sponsor" },
    { id: 3, name: "Jane Smith", amount: 150, method: "Crowdfunding" },
    { id: 4, name: "Green Earth Org", amount: 1000, method: "Grant" },
  ];

  return (
    <div className="p-6 bg-green-300 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl bg-green-900 bg-opacity-90 shadow-lg rounded-2xl p-6 border border-green-600 text-green-100"
      >
        <h2 className="text-3xl font-extrabold text-center text-green-200 mb-6">
          🌍 Funding Overview
        </h2>
        <p className="text-green-300 text-center">
          Track donations and financial contributions for ongoing projects.
        </p>

        {/* Total Funds Raised Section */}
        <div className="mt-6 p-6 bg-green-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Total Funds Raised: <span className="text-green-300">${totalFunds.toLocaleString()}</span></h3>
          <p className="text-green-400">Goal: <span className="text-green-200">${fundingGoal.toLocaleString()}</span></p>

          {/* Progress Bar */}
          <div className="w-full bg-green-700 rounded-full h-4 mt-3">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1 }}
              className="h-4 rounded-full bg-green-400"
            ></motion.div>
          </div>
          <p className="text-green-200 text-right mt-1">{progressPercentage.toFixed(1)}% Achieved</p>
        </div>

        {/* Donation Breakdown */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="p-4 bg-green-700 rounded-lg shadow-md flex flex-col items-center">
            <FiTrendingUp className="text-green-300 text-3xl mb-2" />
            <p className="text-green-200 font-bold">$5,000</p>
            <p className="text-green-400 text-sm">Crowdfunding</p>
          </div>
          <div className="p-4 bg-green-700 rounded-lg shadow-md flex flex-col items-center">
            <FiUsers className="text-green-300 text-3xl mb-2" />
            <p className="text-green-200 font-bold">$6,500</p>
            <p className="text-green-400 text-sm">Sponsors</p>
          </div>
          <div className="p-4 bg-green-700 rounded-lg shadow-md flex flex-col items-center">
            <FiGift className="text-green-300 text-3xl mb-2" />
            <p className="text-green-200 font-bold">$1,000</p>
            <p className="text-green-400 text-sm">Grants</p>
          </div>
        </div>

        {/* Recent Donations */}
        <div className="mt-6 bg-green-800 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-green-300 mb-3">Recent Contributions</h3>
          <ul className="space-y-2">
            {recentDonations.map((donation) => (
              <li key={donation.id} className="flex justify-between bg-green-700 p-3 rounded-lg shadow-sm">
                <span className="text-green-200 font-medium">{donation.name}</span>
                <span className="text-green-400">${donation.amount.toLocaleString()}</span>
                <span className="text-green-300 text-sm">{donation.method}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default FundingOverview;
