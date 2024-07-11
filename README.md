![image](https://github.com/RsmAcademyBD/Create-age-calculator-app-in-react-js-and-tailwind-css/assets/169525487/0dbf7bea-ab5f-4a65-8fe1-b9f2a448dcf2)


# Creating an age calculator app using React JS and Tailwind CSS involves a few steps. Below is a step-by-step guide along with the necessary code snippets.

### Step 1: Set Up Your Project

First, set up a new React project. You can use Create React App for this.

```bash
npx create-react-app age-calculator
cd age-calculator
```

Next, install Tailwind CSS.

```bash
npm install -D tailwindcss
npx tailwindcss init
```

Configure Tailwind CSS by editing `tailwind.config.js` to include the paths to all of your template files.

```js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the following to your `src/index.css` file to import Tailwind's base, components, and utilities.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 2: Create the Age Calculator Component

Now, create an `AgeCalculator.js` file in the `src` directory.

```jsx
import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [specificDate, setSpecificDate] = useState('');
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
        days += new Date(specificDateObj.getFullYear(), specificDateObj.getMonth(), 0).getDate();
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
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={calculateAge}
        >
          Calculate Age
        </button>
        {ageDetails && (
          <div className="mt-4">
            <p>Your age on the specific date is:</p>
            <p><span className="font-bold">{ageDetails.years}</span> years</p>
            <p><span className="font-bold">{ageDetails.months}</span> months</p>
            <p><span className="font-bold">{ageDetails.days}</span> days</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgeCalculator;

```

### Step 3: Use the Age Calculator Component

Replace the content of `src/App.js` with the following to use the `AgeCalculator` component.

```jsx
import React from 'react';
import AgeCalculator from './AgeCalculator';

function App() {
  return (
    <div className="App">
      <AgeCalculator />
    </div>
  );
}

export default App;
```

### Step 4: Run Your App

Finally, start your development server to see your age calculator app in action.

```bash
npm start
```

Your Age Calculator app should now be running, styled with Tailwind CSS and functional with React.
