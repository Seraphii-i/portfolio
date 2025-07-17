document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('dragstart', event => event.preventDefault());

const photos = document.querySelectorAll('.photo');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.getElementById('closeBtn');

photos.forEach(photo => {
  photo.addEventListener('click', () => {
    const bg = photo.style.backgroundImage;
    modalContent.style.backgroundImage = bg;
    modal.style.display = 'flex';
    document.body.classList.add('noselect');
  });
});

closeBtn.onclick = () => {
  modal.style.display = 'none';
  document.body.classList.remove('noselect');
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
    document.body.classList.remove('noselect');
  }
};
