import {useState} from 'react';

const UseTabs = index => {
  const [activeTab, setActiveTab] = useState (index);
  //   const configTab = i => ({id: i, onClck: () => setActiveTab (i), activeTab});

  return [activeTab, setActiveTab];
};

export default UseTabs;
