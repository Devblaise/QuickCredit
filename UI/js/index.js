let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".closeBtn");

const openModal = () => {
  modal.style.display = 'block';
}

const closeModal = () =>{
  modal.style.display = 'none';
}

closeBtn.addEventListener('click', closeModal)

