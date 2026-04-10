const urlDestino = "https://kenimarquines-cyber.github.io/INICIO/";

function showPanel(id) {
    document.getElementById(id).classList.add('active');
}

function hidePanels() {
    document.querySelectorAll('.panel')
        .forEach(p => p.classList.remove('active'));
}

function abrirAdmin() {
    const user = localStorage.getItem('pc_user') || "No hay registros";
    document.getElementById('currentUserDisplay').innerText = user;
    showPanel('adminPanel');
}

function borrarTodo() {
    localStorage.clear();
    location.reload();
}

function guardarRegistro() {
    const user = document.getElementById('regUser').value;
    const pass = document.getElementById('regPass').value;

    localStorage.setItem('pc_user', user);
    localStorage.setItem('pc_pass', pass);
}

function validarLogin() {
    const user = document.getElementById('loginUser').value;
    const pass = document.getElementById('loginPass').value;

    if (
        user === localStorage.getItem('pc_user') &&
        pass === localStorage.getItem('pc_pass')
    ) {
        window.location.href = urlDestino;
    }
}

function recuperarPass() {
    const newPass = document.getElementById('newPass').value;
    localStorage.setItem('pc_pass', newPass);
}

function togglePassword(id, icon) {
    const input = document.getElementById(id);

    if (input.type === "password") {
        input.type = "text";
        icon.textContent = "🐵";
    } else {
        input.type = "password";
        icon.textContent = "🙈";
    }
}