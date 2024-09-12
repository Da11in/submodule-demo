import "./App.css";
import { Button } from "./@shared/src/components";

function App() {
  const handleClick = () => {
    console.log("Click!");
  };

  return (
    <>
      <h2>Using shared submodule</h2>
      <Button onClick={handleClick}>Submodule button</Button>
    </>
  );
}

export default App;
