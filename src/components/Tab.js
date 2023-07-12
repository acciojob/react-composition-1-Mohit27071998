import React, { useState } from 'react';

const Tab = ({ tabs }) => {
  const [curr, setCurr] = useState(tabs[0].content);

  const tabChange = (content) => {
    setCurr(content);
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
      <p>{curr}</p>
    </div>
  );
};

export default Tab;








