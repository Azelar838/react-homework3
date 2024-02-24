
import './Bar.css';
function Bar({value,bgcolor,txtcolor,bgborder,fraction,icon}){
    return (
        <div className='Barcontainer' style={{background:bgcolor,color:txtcolor,border:bgborder}}>
        <div className='Content'>
        <span className="icon">{icon}</span>
        <span className="BarText">{value}</span>
        </div>
        <div className='Frac'>
        <span className='Fraction'>{fraction}</span><span className='fixedFraction'>/100</span>
        </div>
        </div>
     
    );
}

export default Bar;