import React, { useState } from "react"
import '../styles/Child.css';
const Selection = (props) => {
  const { applyColor } = props
  const [style, updateSelectionStyle] = useState({ background: '' });
  return (
    <div
      className="fix-box subheading"
      style={style}
      onClick={() => applyColor(updateSelectionStyle)}
    >
      Selection
    </div>
  )
}

export default Selection