document.getElementById('tipsForm').addEventListener('submit', function (e) {
  e.preventDefault(); // impede o reload da página

  let bill = parseFloat(document.getElementById('bill').value);
  let serviceQual = parseFloat(document.getElementById('serviceQual').value);
  let people = parseInt(document.getElementById('people').value);

  if (isNaN(bill) || bill <= 0 || isNaN(serviceQual) || serviceQual === 0 || isNaN(people) || people <= 0) {
    alert('Por favor, preencha todos os campos corretamente.');
    return;
  }

  let total = (bill * serviceQual) / people;
  total = total.toFixed(2).replace('.', ',');

  document.getElementById('result').innerText = `Cada pessoa deve pagar: R$ ${total}`;
});
