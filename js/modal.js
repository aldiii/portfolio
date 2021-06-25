const modal = document.getElementById("modal");
const modalBtn = document.querySelector(".modal__btn");

const openModal = (text) => {
  const modalText = document.querySelector(".modal__text");
  modalText.innerText = text;
  modal.classList.add("active");
};

const closeModal = () => {
  modal.classList.remove("active");
};

modalBtn.addEventListener("click", closeModal);
