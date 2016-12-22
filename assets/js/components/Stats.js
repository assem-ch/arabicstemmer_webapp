import React from 'react'


const Stats = ({

 words,
 stems,
 ratio

}) => {
    //TODO: FIX THE STATISTICS
    //TODO: STATS STYLE
    let style = {
     padding: '0px',
     marging: '5px'
    }
    return(

    <span id="stats" style={style}>
          <span className="label label-primary"  >words: {words}</span>
          <span className="label label-primary"  >stems: {stems} </span>
          <span className="label label-primary"  >ratio: {ratio} </span>
    </span>

)
}
export default Stats