import { useEffect } from "react";

function Dialog({ showDialog, setShowDialog }) {
  function handleClose() {
    setShowDialog(false);
  }

  useEffect(() => {
    if (showDialog) {
      let dialog = document.querySelector("#my-dialog");
      dialog.showModal();
    }
  }, [showDialog]);

  return (
    <dialog id="my-dialog" onClose={handleClose}>
      <p>Congrats! You win!</p>
      <button commandfor="my-dialog" command="close">
        Play Again
      </button>
    </dialog>
  );
}

export default Dialog;
