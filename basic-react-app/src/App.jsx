import "./App.css";
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx"
import Button from "./Button.jsx"
import Form from "./Form.jsx"

function Description() {
  return <h3>I am the Description!</h3>
}

function App() {
  return (
  <>
    {/* <MsgBox userName="Hemant" textColor="pink"/>
    <MsgBox userName="Neha" textColor="purple"/>
    <ProductTab/> */}
    {/* <Button/> */}
    <Form />
  </>
  );
}

export default App;
