import React from 'react'
import Stem from './Stem'
import Stats from './Stats'
const StemmerResult = ({

results

}) => {

     if(!results.length){


        return(
         <div>

         </div>
         )

     }

     return (
          <div className="well centered">
                 <div>
                   <span className="label label-default">Stats</span>
                   <Stats
                      words={results.map(k => k.length)}
                      stems={ results.map(k => k.length) }
                      ratio={2}
                   />

                 </div>

                <br/>
                <ul id="result">
                         {

                            results.map(s => s.map(w =>
                            <Stem
                             stemValue={w.stem}
                             wordValue={w.word}
                            />
                         ) )

                         }
                </ul>
         </div>
     )
}

export default StemmerResult