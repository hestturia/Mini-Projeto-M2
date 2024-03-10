class Registration {
    constructor(name, especie, sexo, raca, idade, cor, vacinas) {
      this.name = name;
      this.especie = especie;
      this.sexo = sexo;
      this.raca = raca;
      this.idade = idade;
      this.cor = cor;
      this.vacinas = vacinas;
    }
  }
  
  let cadastros = [];
  
  function addRegistration() {
    const name = document.getElementById('name').value;
    const especie = document.getElementById('especie').value;
    const sexo = document.getElementById('sexo').value;
    const raca = document.getElementById('raca').value;
    const idade = document.getElementById('idade').value;
    const cor = document.getElementById('cor').value;
    const vacinas = document.getElementById('vacinas').value;
  
    const registration = new Registration(name, especie, sexo, raca, idade, cor, vacinas);
    cadastros.push(registration);
    console.log (cadastros.length)
    displayRegistrations();
  }
  
  function displayRegistrations() {
    const registrationsList = document.getElementById('registrationsList');
    registrationsList.innerHTML = '';
  
    cadastros.forEach((cadastros, index) => {
      const div = document.createElement('div');
      div.innerHTML = `
          <p><strong>Nome:</strong> ${cadastros.name}</p>
          <p><strong>Espécie:</strong> ${cadastros.especie}</p>
          <p><strong>Sexo:</strong> ${cadastros.sexo}</p>
          <p><strong>Raça:</strong> ${cadastros.raca}</p>
          <p><strong>Idade:</strong> ${cadastros.idade}</p>
          <p><strong>Cor:</strong> ${cadastros.cor}</p>
          <p><strong>Vacinas:</strong> ${cadastros.vacinas}</p>
          <button onclick="editRegistration(${index})">Edit</button>
          <button onclick="deleteRegistration(${index})">Delete</button>
      `;
      registrationsList.appendChild(div);
    });
  }
  
  function editRegistration(index) {
    const registration = cadastros[index];
  
      document.getElementById('name').value = registration.name;
      document.getElementById('especie').value = registration.especie;
      document.getElementById('sexo').value = registration.sexo;
      document.getElementById('raca').value = registration.raca;
      document.getElementById('idade').value = registration.idade;
      document.getElementById('cor').value = registration.cor;
      document.getElementById('vacinas').value = registration.vacinas;
  
    cadastros.splice(index, 1);
    displayRegistrations();
  }
  
  function deleteRegistration(index) {
    cadastros.splice(index, 1);
    displayRegistrations();
  }