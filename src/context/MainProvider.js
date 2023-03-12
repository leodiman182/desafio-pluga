import React, { useState } from 'react';
import MainContext from './MainContext';

function TeiaProvider({ children }) {
  const [selectedTool, setSelectedTool] = useState({
    app_id: "",
    name: "",
    color: "",
    icon: "",
    link: ""
  })
  
  const context = {
    selectedTool, setSelectedTool
  }

  return (
    <MainContext.Provider value={context}>
      {children}
    </MainContext.Provider>
  )
}

export default TeiaProvider;