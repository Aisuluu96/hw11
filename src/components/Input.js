import ReactDom from "react-dom";
const Modal = ({ isOpen, setIsOpen }) => {
  const MODAL_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "blue",
    padding: "50px",
    zIndex: 1000,
    color: "white",
  };
  const OVERLAY_STYLES = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, .7)",
    zIndex: 1000,
  };

  if (isOpen === true) {
    return ReactDom.createPortal(
      <>
        <div style={OVERLAY_STYLES} />
        <div style={MODAL_STYLES}>
          <div className="buttonBox">
            <div className="modalContent">Вы точно хотите удалит ...</div>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="closeModal"
            >
              отмена
            </button>
            <button className="closeModal">да</button>
          </div>
        </div>
      </>,
      document.getElementById("portal")
    );
  }
  return null;
};

export default Modal;