"use client";
import React from "react";
import { useExerciseStore } from "@/app/store/store";
import Weeks from "./overview/weeks";
import OverviewItem from "./overview/OverviewItem";
import Download from "./overview/Download";
import DayTotal from "./overview/DayTotal";
import WeekTotal from "./overview/WeekTotal";

export function Overview() {
  const { clearAll } = useExerciseStore((state) => ({
    clearAll: state.clearAll,
  }));

  return (
    <div className="bg-white rounded-lg p-6 shadow-card">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Session Overview</h3>
      <div className="space-y-4">
        <Weeks />
        <div className="mt-4">
          <OverviewItem />
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Breakdown</h4>
            <DayTotal />
            <WeekTotal />
          </div>
          
          <div className="space-y-2 pt-4">
            <button
              onClick={() => clearAll()}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
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