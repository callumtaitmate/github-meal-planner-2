"use client";
import { useState, useEffect } from "react";
import { useConfigureSotre, useDayStore } from "@/app/store/store";
import { v4 as uuidv4 } from "uuid";
import ItemInfo from "./configurefood/ItemInfo";
import AddAllDays from "./configurefood/AddAllDays";
import AddCurrentDay from "./configurefood/AddCurrentDay";

export function ConfigureFood() {
  const { day } = useDayStore((state) => ({
    day: state.day,
  }));

  const { hello } = useConfigureSotre((state) => ({
    hello: state.configure,
  }));

  useEffect(() => {
    updateMacros();
  }, [hello]);

  const [quantity, setQuantity] = useState(100);
  const [price, setPrice] = useState(0);
  const [kcal, setKcal] = useState(0);
  const [carb, setCarb] = useState(0);
  const [fat, setFat] = useState(0);
  const [prot, setProt] = useState(0);
  const [label, setLabel] = useState();
  const [id, setId] = useState("");

  const handleQuantity = (e) => {
    setQuantity(e);
  };

  const updateMacros = () => {
    setKcal(Math.trunc((hello.result.food.nutrients.ENERC_KCAL / 100) * quantity));
    setCarb(Math.trunc((hello.result.food.nutrients.CHOCDF / 100) * quantity));
    setFat(Math.trunc((hello.result.food.nutrients.FAT / 100) * quantity));
    setProt(Math.trunc((hello.result.food.nutrients.PROCNT / 100) * quantity));
    setLabel(hello.result.food.label);
    setPrice(price * 1);
    setId(uuidv4);
  };

  const handlePrice = (e) => {
    setPrice(e);
  };

  const postCalcObject = {
    quantity: quantity,
    price: price,
    kcal: kcal,
    carb: carb,
    fat: fat,
    prot: prot,
    label: label,
    id: id,
    day: day,
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-card">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Configure Food</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Adjust Weight (g)
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              value={quantity}
              onChange={(e) => handleQuantity(e.target.valueAsNumber)}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button
              onClick={updateMacros}
              onKeyDown={updateMacros}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Recalculate
            </button>
          </div>
        </div>

        <ItemInfo
          hello={hello}
          kcal={kcal}
          carb={carb}
          fat={fat}
          prot={prot}
          quantity={quantity}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => handlePrice(e.target.valueAsNumber)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div className="flex justify-end gap-2 pt-4">
          <AddCurrentDay postCalcObject={postCalcObject} hello={hello} />
          <AddAllDays postCalcObject={postCalcObject} hello={hello} />
        </div>
      </div>
    </div>
  );
}