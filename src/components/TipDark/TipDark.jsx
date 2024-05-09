import PropTypes from 'prop-types';
import iconSun from './common/icons8-sun-96.png'
import iconMoon from './common/icons8-moon-96.png'
const TipDark = (props) => {
    const {isDark , onchangeDark} = props

    const setdarkButton = {
       backgroundColor : isDark ? '#810CA8' : 'hsl(0, 0%, 100%)',
       boxShadow : isDark ? 'white' : 'violet',
       transition : isDark ? '1s' : '1s'
    }
  return (

    <div className='absolute bottom-[-1.8rem] start-0 end-0 flex justify-center  '>
        <button style={setdarkButton} className='btn  p-1 rounded-full shadow-md animate-bounce  ' onClick={onchangeDark}>
            <img width='30px' src={isDark ? iconMoon : iconSun} alt="" />
        </button>
    </div>
  )
}
TipDark.propTypes = {
    
    isDark : PropTypes.string.isRequired,
    onchangeDark : PropTypes.func
};
export default TipDark