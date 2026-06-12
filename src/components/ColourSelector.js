import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { classname,background, label } = config;
  return (
    <button className={ classname } onClick={() => selectNextBackground({background: background})}>
      <label>{ label }</label>
    </button>
  )
}
export default ColourSelector;
