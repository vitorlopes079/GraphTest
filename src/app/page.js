"use client";

import React, { useState } from "react";
import Column from "./_components/Column";

export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState('Jun');

  const values = {
    Mar: 340,
    Apr: 215,
    May: 365,
    Jun: 305,
    Jul: 155,
    Aug: 370,
    Sep: 215,
    Oct: 230
  };

  const maxVal = 305; 
  const maxHeight = 130; 
  const ratio = maxHeight / maxVal; 

  const handleColumnClick = (month) => {
    setSelectedMonth(month);
  };

  return (
    <main>
      <div className="container">
        <div className="columns-container">
          {Object.entries(values).map(([month, value]) => (
            <Column
              key={month}
              month={month}
              value={`$${value}`}
              height={value * ratio}
              selected={selectedMonth === month}
              onClick={handleColumnClick}
            />
          ))}
        </div>
      </div>
    </main>
  );
}