import React, { useState } from 'react';

const Tab = ({ tabs }) => {
  const [curr, setCurr] = useState(tabs[0].content);

  const tabChange = (val) => {
    setCurr(val);
  };

  return (
    <div>
      <ul>
        {tabs.map((tab, index) => (
          <li key={index} onClick={() => tabChange(tab.content)}>
            {tab.title}
          </li>
        ))}
      </ul>
      <div>{curr}</div>
    </div>
  );
};

export default Tab;
