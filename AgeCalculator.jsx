import { useState } from "react";
import React from "react";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [specificDate, setSpecificDate] = useState("");
  const [ageDetails, setAgeDetails] = useState(null);

  const calculateAge = () => {
    if (birthDate && specificDate) {
      const birthDateObj = new Date(birthDate);
      const specificDateObj = new Date(specificDate);

      let years = specificDateObj.getFullYear() - birthDateObj.getFullYear();
      let months = specificDateObj.getMonth() - birthDateObj.getMonth();
      let days = specificDateObj.getDate() - birthDateObj.getDate();

      if (days < 0) {
        months--;
        days += new Date(
          specificDateObj.getFullYear(),
          specificDateObj.getMonth(),
          0
        ).getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      setAgeDetails({
        years,
        months,
        days,
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Age Calculator</h1>
        <div className="mb-4">
          <label className="block mb-2">
            Birth Date:
            <input
              type="date"
              className="border border-gray-300 p-2 rounded-lg mb-4 w-full"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </label>
          <label className="block mb-2">
            Specific Date:
            <input
              type="date"
              className="border border-gray-300 p-2 rounded-lg mb-4 w-full"
              value={specificDate}
              onChange={(e) => setSpecificDate(e.target.value)}
            />
          </label>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:scale-110 duration-300"
          onClick={calculateAge}
        >
          Calculate Age
        </button>
        {ageDetails && (
          <div className="mt-4">
            <p>Your age on the specific date is:</p>
            <p>
              <span className="font-bold">{ageDetails.years}</span> years
            </p>
            <p>
              <span className="font-bold">{ageDetails.months}</span> months
            </p>
            <p>
              <span className="font-bold">{ageDetails.days}</span> days
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default AgeCalculator;
