import React from "react";


const StemForm = ({
   value,
   onchange,
   fetchingStem

}) => (

   <div>
      <input id="query" type="text" value={value} onChange={onchange} />
      <button className="btn btn-conf btn-success" onClick={fetchingStem}>
           Stem!
       </button>

       <button className="btn btn-conf btn-info">
           File
      </button>
   </div>
)
export default StemForm
