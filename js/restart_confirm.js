window.setupRestartConfirm = function (gameManager) {
  const modal = document.getElementById("confirmModal");
  const confirmYes = document.getElementById("confirmYes");
  const confirmNo = document.getElementById("confirmNo");

  confirmYes.onclick = function () {
    modal.classList.remove("show");
    gameManager.inputManager.emit("restart");
  };

  confirmNo.onclick = function () {
    modal.classList.remove("show");
  };
};