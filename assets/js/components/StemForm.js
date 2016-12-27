import React from "react";


const StemForm = ({
   value,
   onchange,
   fetchingStem,
   handleFile

}) => (

   <div>
      <input id="query" type="text" value={value} onChange={onchange} />
      <button className="btn btn-conf btn-success" onClick={fetchingStem}>
           Stem!
       </button>

       <button className="btn btn-conf btn-info" onClick={handleFile}>
           File
      </button>
      <input type="file" id="fileInput" style={{ display: 'none' }}   />
   </div>
)
export default StemForm
