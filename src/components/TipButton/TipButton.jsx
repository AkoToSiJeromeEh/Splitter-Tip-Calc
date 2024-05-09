// TipButton component
import React from "react";
import PropTypes from 'prop-types';

const TipButton = (props) => {
  const { onClickTip, selectedPercentage , customVal , customChangeTip } = props;
  const tipPercentages = [5, 10, 15, 25, 50];

  return (
    <div className='grid grid-cols-3 gap-x-2 gap-y-2'>
      {tipPercentages.map((percentage) => (
        <button
          className={`bg-VDGrayishcyan rounded-sm w-full py-1 px-4 ${
            selectedPercentage === percentage ? 'focus:bg-slate-300' : ''
          }`}
          key={percentage}
          onClick={() => onClickTip(percentage)} // Pass the percentage argument here
        >
          {percentage}%
        </button>
      ))}
      <input value={customVal} onChange={customChangeTip} placeholder="Custom" className="bg-white p-1 rounded-sm border-2 border-stone-600	" type="text" />
    </div>
  );
};

TipButton.propTypes = {
  onClickTip: PropTypes.func,
  selectedPercentage: PropTypes.number,
  customVal : PropTypes.number,
  customChangeTip : PropTypes.func
};

export default TipButton;
