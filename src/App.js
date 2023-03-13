import MainProvider from "./context/MainProvider";
import Routing from "./Routing";

function App() {  
  return (
    <MainProvider>
      <Routing />
    </MainProvider>
  );
}

export default App;
