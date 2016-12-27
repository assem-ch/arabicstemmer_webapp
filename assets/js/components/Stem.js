import React from 'react'

const Stem = ({

stemValue,
wordValue

}) => (
  <span key={stemValue} className="text-success" data-toggle='tooltip'  data-placement='bottom'  title={wordValue}>

    {" "+stemValue+" "}
  </span>
)

export default Stem