import React, { useContext } from 'react';
import MainContext from '../../context/MainContext';

const Modal = () => {
  const { modalOpen, setModalOpen, selectedTool } = useContext(MainContext);

  return (
    <aside>
      <section>
        <img src="" alt="" />
        <div>
          <p>nome</p>
          <a href=""></a>
        </div>
      </section>
      <section>
        <h4></h4>
        <div>

        </div>
      </section>
    </aside>
  )
}

export default Modal;