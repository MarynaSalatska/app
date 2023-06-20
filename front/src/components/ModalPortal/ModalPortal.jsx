import ReactDOM from "react-dom";

const ModalPortal = ({ children }) => {
  return ReactDOM.createPortal(
    <div>{children}</div>,
    document.getElementById("modal-root")
  );
};

export default ModalPortal;
