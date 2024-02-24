import Bar from'./Bar'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'; 
import { faBrain } from '@fortawesome/free-solid-svg-icons'; 
import { faMessage } from '@fortawesome/free-solid-svg-icons'; 
import { faEye } from '@fortawesome/free-solid-svg-icons'; 
import './Result.css';

function Result() {
  return (
    <div className='Container'>
    <div className='Left'>
      <h3>Your Result</h3>
      <div className='Circle'>
        <h1 className='Number'>76</h1>
        <span className='Text'>of 100</span>
  
      </div>
      <h1 class="Great">Great</h1>
      <p className="Text Para">
        You scored higher than 65% of the people who have
        taken these tests
      </p>
    </div>
    <div className='Right'>
        <h2>Summary</h2>
        <div className='Bars'>
        <Bar icon={<FontAwesomeIcon icon={faBolt} style={{color: "#f2a3ac"}} />}  value={"Reaction"} bgcolor={"#fff6f4"} txtcolor={"#f2a3ac"} bgborder={"none"} fraction={"80"} />
        <Bar icon={<FontAwesomeIcon icon={faBrain} style={{color: "#f7e4a1"}} />} value={"Memory"} bgcolor={"#fffcef"} txtcolor={"#f6e4a1"} bgborder={"none"} fraction={"92"}/>
        <Bar icon={<FontAwesomeIcon icon={faMessage} style={{color: "#81cdba"}} />} value={"Verbal"} bgcolor={"#f2fbfa"} txtcolor={"#81cdba"} bgborder={"none"} fraction={"61"} />
        <Bar icon={<FontAwesomeIcon icon={faEye} style={{color: "#8891ca"}} />} value={"Visual"} bgcolor={"#f3f3ff"} txtcolor={"#888ec7"} bgborder={"none"}  fraction={"72"}/>
        </div>
        <button>Continue</button>
      </div>
      </div>
  );
}

export default Result;