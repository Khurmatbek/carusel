
const cards = Array.from(document.querySelectorAll('.card'));
let current = cards.findIndex(c => c.classList.contains('active'));
if (current === -1) current = 0;

function show(index) {
  cards.forEach((c, i) => c.classList.toggle('active', i === index));
}

document.getElementById('prev').addEventListener('click', () => {
  current = (current - 1 + cards.length) % cards.length;
  show(current);
});

document.getElementById('next').addEventListener('click', () => {
  current = (current + 1) % cards.length;
  show(current);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') document.getElementById('prev').click();
  if (e.key === 'ArrowRight') document.getElementById('next').click();
});
