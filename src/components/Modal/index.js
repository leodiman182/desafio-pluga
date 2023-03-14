import React, { useContext } from 'react';
import MainContext from '../../context/MainContext';
import './style.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = () => {
  const { setModalOpen, selectedTool, previouslySelected } = useContext(MainContext);

  return (
    <>
      <div onClick={() => setModalOpen(false)} className='bg-interface'>
      </div>
      <aside className='modal-wrapper'>
        <section style={{backgroundColor: selectedTool.color}} className='wrapper-modal-header'>
          <AiOutlineCloseCircle onClick={() => setModalOpen(false)} size={'2em'} className='close-icon' />
          <div className="custom-shape-divider-top-1678746214">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path style={{ fill: selectedTool.color }} d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
            </svg>
          </div>
          <img className='icon-modal' src={ selectedTool.icon } alt={ selectedTool.name } />
          <div className='modal-info-wrapper'>
            <p>{ selectedTool.name }</p>
            <a target='_blank' href={ selectedTool.link } rel="noreferrer">Saiba mais</a>
          </div>
        </section>
        <section className='second-section'>
          <h4 className='previous-header'>Últimas ferramentas utilizadas</h4>
          <div className='previous-items'>
            {
              previouslySelected.length > 1 ? previouslySelected
              .filter((tool, index) => index !== previouslySelected.length - 1)
              .map((tool, index) => (

                // OUTRA ALTERNATIVA - MUDAR PARA MODAL DA FERRAMENTA SELECIONADA
                // <div
                //   onClick={() => setSelectedTool(tool)}
                //   className='previous-card-wrapper' rel="noreferrer"
                // >
                //   <img
                //     style={{backgroundColor: tool.color}}
                //     className="previous-card-icon" src={ tool.icon } alt={ tool.name } />
                //   <p className='previous-card-name'>{ tool.name }</p>
                // </div>
                
                <a
                  key={ index }
                  href={ tool.link }
                  target='_blank'
                  className='previous-card-wrapper' rel="noreferrer"
                >
                  <img
                    style={{backgroundColor: tool.color}}
                    className="previous-card-icon" src={ tool.icon } alt={ tool.name } />
                  <p className='previous-card-name'>{ tool.name }</p>
                </a>
              )) : (<></>)
            }
          </div>
        </section>
      </aside>    
    </>
  )
}

export default Modal;