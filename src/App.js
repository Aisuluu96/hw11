import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const BUTTON_WRAPPER_STYLES = {
    position: "relative",
    zIndex: 1,
  };

  const OTHER_CONTENT_STYLES = {
    position: "relative",
    zIndex: 1,
    backgroundColor: "red",
    padding: "10px",
    height: " 300px",
  };
  return (
    <div>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Open Modal
        </button>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div style={OTHER_CONTENT_STYLES}> App Content</div>
    </div>
  );
}

export default App;
