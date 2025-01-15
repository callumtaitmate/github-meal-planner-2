"use client";
import React from "react";
import { useOverviewStore } from "@/app/store/store";
import Weeks from "./overview/weeks";
import OverviewItem from "./overview/OverviewItem";
import DayTotal from "./overview/DayTotal";
import WeekTotal from "./overview/WeekTotal";
import Download from "./overview/Download";

export function Overview() {
  const { clearAll } = useOverviewStore((state) => ({
    clearAll: state.clearAll,
  }));

  return (
    <div className="bg-white rounded-lg p-6 shadow-card">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Weekly Overview</h3>
      <div className="space-y-4">
        <Weeks />
        <div className="mt-4">
          <OverviewItem />
        </div>
        <div className="space-y-4">
          <DayTotal />
          <WeekTotal />
          <div className="space-y-2 pt-4">
            <button
              onClick={() => clearAll()}
              className="w-full bg-white outline outline-red-400 hover:bg-red-200 text-red-500 font-medium py-1 px-4 rounded-lg transition-colors duration-200"
            >
              Clear All
            </button>
            <Download />
            <button className="w-full bg-gray-200 text-gray-400 cursor-not-allowed font-medium py-2 px-4 rounded-lg">
              Sign up to save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}