import PropTypes from 'prop-types';
import TipButton from '../../components/TipButton'
const TipFunction = (props) => {

  const {billVal , numpeopleVal , onchangeBill , onchangePeople , onClickTip , selectedPercentage , customVal , customChangeTip} = props
  return (
    // container

    <div className="flex w-2/4 flex-col items-start	gap-5 p-5 rounded-md ">
      {/* input field container */}
        <div className="w-full">
           <h2 className="mb-2 text-DGrayishcyan">Bill</h2>
           <input  value={billVal} onChange={onchangeBill}  className=" border-2 border-VDGrayishcyan	 rounded w-full p-2 text-stone-900 border-solid " type="text" placeholder="$" />
        </div>
      {/* tip button container */}
        <div>
        <h2 className='mb-2 text-DGrayishcyan'>Select Tip %</h2>
        <TipButton
        onClickTip={onClickTip}
        selectedPercentage={selectedPercentage}
        customVal={customVal}
        customChangeTip={customChangeTip}
        />
        </div>
      {/* tip number of people container */}
        <div className="w-full">
        <h2 className="mb-2 text-DGrayishcyan">Number of People</h2>
        <input value={numpeopleVal} onChange={onchangePeople} className=" border-2 border-VDGrayishcyan	 rounded w-full p-2 text-stone-900 border-solid"  type="number" placeholder="0" />
        </div>
    </div>
  )
}

export default TipFunction

TipFunction.propTypes = {
  billVal : PropTypes.string.isRequired,
  numpeopleVal : PropTypes.string.isRequired,
  onchangeBill : PropTypes.func,
  onchangePeople : PropTypes.func,
  onClickTip : PropTypes.func,
  selectedPercentage : PropTypes.number.isRequired,
  customVal : PropTypes.number.isRequired,
  customChangeTip : PropTypes.func
};