import { useCallback, useContext } from "react";
import MainContext from "../../context/MainContext";
import ToolCard from "../ToolCard";

function Items() {
  const { api, setSelectedTool, setModalOpen,
    previouslySelected, setPreviouslySelected
  } = useContext(MainContext);

  const handleToolSelect = useCallback((el) => {
    const array = previouslySelected;
    
    if (previouslySelected.length !== 0) {
      const sameElement = previouslySelected.includes(el);
      
      if (sameElement) {
        const arrayWithoutEl = previouslySelected.filter(index => index.app_id !== el.app_id);
        
        arrayWithoutEl.push(el);
        setPreviouslySelected(arrayWithoutEl);
        return
      } else {
        array.push(el);
  
        if (previouslySelected.length > 4) {
          array.shift();
        }
      }
    } else {
      array.push(el);
    }
    
    setPreviouslySelected(array);

  }, [previouslySelected, setPreviouslySelected]);
  return (
    <section className='grid-wrapper'>
      {
        api
          .map((el, index) => (
          <ToolCard
            onClick={() => {
              setSelectedTool(el)
              handleToolSelect(el)
              setModalOpen(true)
            }}
            key={ index }
            id={ el.app_id }
            name={ el.name }
            color={ el.color }
            icon={ el.icon }
            link={ el.link }
          />
        ))
      }
    </section>
  );
}

export default Items;