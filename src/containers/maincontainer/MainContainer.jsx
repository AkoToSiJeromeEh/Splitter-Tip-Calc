// Calling the Components
import React, { useState } from "react";
import TipResult from "../../components/TipResult";
import TipFunction from "../../components/TipFunction";
import TipDark from "../../components/TipDark";
import TipLogo from "./common/logo.svg";
const MainContainer = () => {

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prevDarkMode) => !prevDarkMode);


  const [billAmountVal, setBillAmount] = useState(100);
  const [numPeopleVal, setNumOfPeople] = useState(1);
  const [selectedTipPercentage, setSelectedTipPercentage] = useState(5);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [customPercentageVal, setCustomPercentageVal] = useState(0);

  const handleBillInputChange = (e) => {
    const billAmount = parseFloat(e.target.value);
    if (!isNaN(billAmount)) {
      setBillAmount(billAmount);
      calculateTip(billAmount, selectedTipPercentage, numPeopleVal);
    }
  };

 
  const handleNumPeopleChange = (e) => {
    const numPeople = parseInt(e.target.value);
    if (!isNaN(numPeople) && numPeople > 0) {
      setNumOfPeople(numPeople);
      calculateTip(billAmountVal, selectedTipPercentage, numPeople);
    }
  };

 
  const handleCustomPercentageChange = (e) => {
    const customPercentage = parseInt(e.target.value);
    if (!isNaN(customPercentage) && customPercentage >= 0 && customPercentage <= 100) {
      setCustomPercentageVal(customPercentage);
      calculateTip(billAmountVal, customPercentage, numPeopleVal);
    }
  };

 
  const handleTipButtonClick = (percentage) => {
    setSelectedTipPercentage(percentage);
    calculateTip(billAmountVal, percentage, numPeopleVal);
  };

  const calculateTip = (billAmount, tipPercentage, numPeople) => {
    const totalTip = billAmount * (tipPercentage / 100);
    const totalPerPerson = totalTip / numPeople;
    setTipAmount(totalTip);
    setTotalPerPerson(totalPerPerson.toFixed(2));
  };
  
  return (
    //Main Container
    <main
      style={{
        backgroundColor: darkMode ? "black" : "hsl(185, 41%, 84%)",
        transition: darkMode ? "1s" : "1s",
        color: darkMode ? "#C147E9" : "hsl(172, 67%, 45%)",
      }}
      className="flex flex-col gap-5 justify-center items-center min-h-screen font-SpaceMonospaceBold"
    >
      {/* Wrapper of the two components */}
      <div>
        <img width="55px" src={TipLogo} alt="" />
      </div>

      <div
        style={{
          backgroundColor: darkMode ? "black" : "white",
          transition: darkMode ? "1s" : "1s",
          boxShadow: darkMode ? "1px 1px 5px #810CA8" : "",
        }}
        className="flex justify-between gap-5 w-6/12 p-5 rounded-2xl relative shadow-lg"
      >
        <TipDark isDark={darkMode} onchangeDark={toggleDarkMode} />
        {/* This is the Result Container Meaning all of the Calculation that have done are being rendered or display by this container */}
        <TipFunction
          isDark={darkMode}
          billVal={billAmountVal}
          numpeopleVal={numPeopleVal}
          onchangeBill={handleBillInputChange}
          onchangePeople={handleNumPeopleChange}
          onClickTip={handleTipButtonClick}
          selectedPercentage={selectedTipPercentage}
          customChangeTip={handleCustomPercentageChange}
          customVal={customPercentageVal}
        />

        {/* This Tip Function is contains all of the inputs and buttons jsx elements that are need to calculate the TIP */}

        <TipResult 
        isDark={darkMode}
        TipAmount={tipAmount}
        TotalAmount={totalPerPerson}
         />
      </div>
    </main>
  );
};

export default MainContainer;
