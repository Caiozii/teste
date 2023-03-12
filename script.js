// Seleciona o formulário
const form = document.querySelector('form');

// Adiciona um evento de submissão ao formulário
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que o formulário seja enviado

  // Seleciona os elementos do formulário
  const name = document.querySelector('#name');
  const gender = document.querySelector('#gender');
  const race = document.querySelector('#race');
  const classType = document.querySelector('#classType');
  const level = document.querySelector('#level');
  const hitPoints = document.querySelector('#hitPoints');
  const armorClass = document.querySelector('#armorClass');
  const alignment = document.querySelector('#alignment');
  const equipment = document.querySelector('#equipment');

  // Cria um objeto com os dados do personagem
  const character = {
    name: name.value,
    gender: gender.value,
    race: race.value,
    classType: classType.value,
    level: level.value,
    hitPoints: hitPoints.value,
    armorClass: armorClass.value,
    alignment: alignment.value,
    equipment: equipment.value
  };

  // Imprime os dados do personagem no console
  console.log(character);

  // Limpa os campos do formulário
  form.reset();
});
