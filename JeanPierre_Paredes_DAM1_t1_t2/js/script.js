
  var trabajadores = [];

  document.getElementById('registro-trabajador').addEventListener('submit', function(e) {
    e.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('correo').value;
    var departamento = document.getElementById('departamento').value;

    trabajadores.push({ nombre: nombre, apellido: apellido, correo: correo, departamento: departamento });

    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('departamento').value = '';

    actualizarTrabajadores();
    actualizarDepartamentos();
  });

  function actualizarTrabajadores() {
    var listaTrabajadores = document.getElementById('lista-trabajadores');
    listaTrabajadores.innerHTML = '';
    trabajadores.forEach(function(trabajador) {
      var li = document.createElement('li');
      li.textContent = trabajador.nombre + ' ' + trabajador.apellido;
      li.classList.add('list-group-item');
      listaTrabajadores.appendChild(li);
    });
  }

  function actualizarDepartamentos() {
    var resumen = {};
    trabajadores.forEach(function(trabajador) {
      resumen[trabajador.departamento] = (resumen[trabajador.departamento] || 0) + 1;
    });
    var resumenDepartamentos = document.getElementById('resumen-departamentos');
    resumenDepartamentos.innerHTML = '';
    for (var departamento in resumen) {
      var p = document.createElement('p');
      p.textContent = departamento + ': ' + resumen[departamento];
      resumenDepartamentos.appendChild(p);
    }
  }

