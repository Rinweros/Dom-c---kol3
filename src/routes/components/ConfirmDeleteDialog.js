import React, { useState } from "react";

function ConfirmDeleteDialog({ onDelete }) {
  const [visible, setVisible] = useState(false);

  const handleDelete = () => {
    onDelete();
    setVisible(false);
  };

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <>
      <button className="btn btn-danger btn-sm" onClick={show}>
        Smazat
      </button>
      {visible && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ background: "rgba(0,0,0,0.5)" }}
          onClick={hide}
        >
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Potvrzení smazání</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={hide}
                ></button>
              </div>
              <div className="modal-body">Opravdu chcete smazat tento seznam?</div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={hide}>
                  Zavřít
                </button>
                <button className="btn btn-danger" onClick={handleDelete}>
                  Smazat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ConfirmDeleteDialog;
