import React from 'react'

const Stem = ({

stemValue,
wordValue

}) => (
  <span className="text-success" data-toggle='tooltip'  data-placement='bottom'  title={wordValue}>

    {" "+stemValue+" "}
  </span>
)

export default Stem