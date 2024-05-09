import PropTypes from 'prop-types';
const TipResult = (props) => {
  const {TotalAmount , TipAmount , isDark} = props

  const darkmodeStyle = {
    backgroundColor : isDark ? '#371B58' : 'hsl(183, 100%, 15%)',
    transition : isDark ? '1s' : '1s'
  }

  return (
    // container
    <div style={darkmodeStyle} className=" p-5 rounded-lg w-2/4  flex flex-col justify-around gap-4 ">
      {/* tip amount container */}
      <div className="flex  flex-row justify-between items-start">
        <div >
          <h3 className="text-White text-sm">
            Tip Amount 
          </h3>
          <span className="text-xs text-Grayishcyan">/person</span>
        </div>
        <div>
          <h2 className="text-3xl	"> ${TotalAmount}</h2>
        </div>
      </div>
      {/* total per-person container */}
      <div className="flex flex-row justify-between items-start">
        <div>
          <h3 className="text-White text-sm">
            Total 
          </h3>
          <span className="text-xs text-Grayishcyan">/person</span>
        </div>
        <div>
          <h2 className="text-3xl">${TipAmount}</h2>
        </div>
      </div>
      {/* button container */}
      <div>
         <button className="btn py-2 px-5 w-full rounded-md bg-DGrayishcyan text-VDGrayishcyan">Reset</button>
      </div>
    </div>
  );
};

TipResult.propTypes = {
  TipAmount : PropTypes.number.isRequired,
  TotalAmount : PropTypes.number.isRequired,
  isDark : PropTypes.string.isRequired
};
export default TipResult;
