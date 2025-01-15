"use client";
import { useState } from "react";
import { useMovementStore, useDayStore } from "@/app/store/store";
import { v4 as uuidv4 } from "uuid";
import ItemInfo from "./configurefood/ItemInfo";
import AddAllDays from "./configurefood/AddAllDays";
import AddCurrentDay from "./configurefood/AddCurrentDay";

export function ConfigureFood() {
  const { day } = useDayStore((state) => ({
    day: state.day,
  }));

  const { hello } = useMovementStore((state) => ({
    hello: state.exercise,
  }));

  const [reps, setReps] = useState(8);
  const [sets, setSets] = useState(3);
  const [weight, setWeight] = useState(100);
  const [id, setId] = useState("");

  const handleReps = (e) => {
    setReps(e);
  };

  const handleSets = (e) => {
    setSets(e);
  };

  const handleWeight = (e) => {
    setWeight(e);
    setId(uuidv4);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-card">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Configure Movement</h3>
      <div className="space-y-4">
        <ItemInfo hello={hello} />
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Reps
          </label>
          <input
            type="number"
            value={reps}
            onChange={(e) => handleReps(e.target.valueAsNumber)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sets
          </label>
          <input
            type="number"
            value={sets}
            onChange={(e) => handleSets(e.target.valueAsNumber)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Weight (kg)
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => handleWeight(e.target.valueAsNumber)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div className="flex justify-end gap-2 pt-4">
          <AddCurrentDay
            hello={hello}
            reps={reps}
            sets={sets}
            weight={weight}
            day={day}
          />
          <AddAllDays
            hello={hello}
            reps={reps}
            sets={sets}
            weight={weight}
            id={id}
          />
        </div>
      </div>
    </div>
  );
}