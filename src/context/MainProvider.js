import React, { useState } from 'react';
import MainContext from './MainContext';

function TeiaProvider({ children }) {
  const [api, setApi] = useState([]);
  const [data, setData] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);

  const [selectedTool, setSelectedTool] = useState({
    app_id: "",
    name: "",
    color: "",
    icon: "",
    link: ""
  })
  
  const context = {
    api, setApi,
    data, setData,
    modalOpen, setModalOpen,
    selectedTool, setSelectedTool
  }

  return (
    <MainContext.Provider value={context}>
      {children}
    </MainContext.Provider>
  )
}

export default TeiaProvider;