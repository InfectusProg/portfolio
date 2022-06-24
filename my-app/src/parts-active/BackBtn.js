
const BackBtn = ({ToggleOn, focus}) =>{
    return(
        <div className="back-btn">
          <div 
          onClick={()=>{ToggleOn(focus-1, 2000)}}
          >
        
          </div>
        </div>
    )
}
export default BackBtn;