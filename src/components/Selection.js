import React, { useState } from "react"
const Selection = (props) => {
  const { applyColor } = props
  const [style, updateSelectionStyle] = useState({ background: '' });
  return (
    <div
      className="fix-box"
      style={style}
      onClick={() => applyColor(updateSelectionStyle)}
    >
      Selection
    </div>
  )
}

export default Selection