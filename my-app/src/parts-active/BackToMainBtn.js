import {motion} from 'framer-motion';
const BackToMainBtn = ({ToggleOff}) =>{
    return(
        <div className="backToMain-btn">
          <motion.span
            onClick={ToggleOff}
            className='backToMain-btn-txt'
            whileHover={{scale:1.2}}
          >
            BACK
          </motion.span>
        </div>
    )
}
export default BackToMainBtn;