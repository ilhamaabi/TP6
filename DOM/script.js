
const div = document.createElement('div');
div.id = "maDiv";
document.getElementById('container').appendChild(div);


const p = document.createElement('p');
p.textContent = "Ceci est un paragraphe";

div.appendChild(p);


p.textContent = "hello ..!";


p.classList.add('styled-paragraph');


div.addEventListener('click', () => {
  p.textContent = "Tu as fait un clique";
});
