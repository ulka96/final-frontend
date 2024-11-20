const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <button onClick={onClose} className="close-btn">Close</button>
                {children}
            </div>
        </div>
    );
};
