
const NextBtn = ({ToggleOn, focus}) =>{
    return(
        <div className="next-btn">
          <div
            onClick={()=>{ToggleOn(focus+1, 2000)}}
          >
          </div>
        </div>
    )
}
export default NextBtn;