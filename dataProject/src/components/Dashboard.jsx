import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  // Sample data
  const salesData = [
    { name: "Jan", value: 4000, growth: 2400 },
    { name: "Feb", value: 3000, growth: 1398 },
    { name: "Mar", value: 2000, growth: 9800 },
    { name: "Apr", value: 2780, growth: 3908 },
    { name: "May", value: 1890, growth: 4800 },
    { name: "Jun", value: 2390, growth: 3800 },
  ];

  const categoryData = [
    { name: "Technology", value: 400 },
    { name: "Marketing", value: 300 },
    { name: "Sales", value: 300 },
    { name: "Support", value: 200 },
  ];

  const COLORS = ["#1a1a1a", "#4a4a4a", "#7a7a7a", "#aaaaaa"];

  const stats = [
    {
      label: "Total Revenue",
      value: "$124,563",
      change: "+12.5%",
      positive: true,
    },
    { label: "Active Users", value: "8,426", change: "+8.2%", positive: true },
    {
      label: "Conversion Rate",
      value: "3.24%",
      change: "-2.1%",
      positive: false,
    },
    {
      label: "Avg. Order Value",
      value: "$86.50",
      change: "+5.7%",
      positive: true,
    },
  ];

  const recentActivity = [
    { action: "New user registration", time: "2 minutes ago", type: "user" },
    { action: "Payment processed", time: "15 minutes ago", type: "payment" },
    { action: "Report generated", time: "1 hour ago", type: "report" },
    { action: "Data exported", time: "2 hours ago", type: "export" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-light text-gray-900 tracking-tight">
              Dashboard Analytics
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Welcome back! Here's your overview.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setSelectedPeriod("week")}
              className={`px-4 py-2 text-sm rounded-lg transition-all ${
                selectedPeriod === "week"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setSelectedPeriod("month")}
              className={`px-4 py-2 text-sm rounded-lg transition-all ${
                selectedPeriod === "month"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Month
            </button>
            <button
              onClick={() => setSelectedPeriod("year")}
              className={`px-4 py-2 text-sm rounded-lg transition-all ${
                selectedPeriod === "year"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Year
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <p className="text-sm text-gray-500 mb-2">{stat.label}</p>
              <p className="text-3xl font-light text-gray-900 mb-2">
                {stat.value}
              </p>
              <p
                className={`text-sm font-medium ${
                  stat.positive ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Line Chart */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Revenue Trend
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#1a1a1a"
                  strokeWidth={2}
                  dot={{ fill: "#1a1a1a" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Growth Metrics
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="growth" fill="#1a1a1a" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Pie Chart */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 lg:col-span-1">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Category Distribution
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {categoryData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 lg:col-span-2">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Recent Activity
            </h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      {activity.type === "user" && "👤"}
                      {activity.type === "payment" && "💳"}
                      {activity.type === "report" && "📊"}
                      {activity.type === "export" && "📤"}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {activity.action}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
