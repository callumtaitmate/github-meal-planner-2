"use client";
import React, { useState, useEffect } from "react";
import FoodResults from "./addfood/FoodResults";

export function AddFood() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/exercises?query=${query}`);
      const exercises = await response.json();
      setResults(exercises);
    };
    if (query !== "" && query.length > 2) {
      fetchData();
    }
  }, [query]);

  const handleChange = (e) => {
    setQuery(e);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-card">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Add Movement</h3>
      <div className="space-y-4">
        <div className="relative">
          <input
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200"
            type="text"
            placeholder="Search for exercise..."
            onChange={(e) => handleChange(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
        <p className="text-xs text-indigo-600 font-medium text-right">
          Start typing to search (min. 3 characters)
        </p>
      </div>
      {results != null && (
        <div className="mt-4">
          <FoodResults results={results} setResults={setResults} />
        </div>
      )}
    </div>
  );
}