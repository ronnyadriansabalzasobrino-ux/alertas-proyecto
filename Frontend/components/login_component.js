class LoginComponent extends HTMLElement {

connectedCallback() {

this.innerHTML = `
<div class="login-container">
  <div class="login-card">
    <h1>Sistema de alertas</h1>

    <label>Correo electrónico</label>
    <input id="mail" type="email">

    <label>Contraseña</label>
    <input id="password" type="password">

    <label>Selecciona tu rol</label>
    <div style="display:flex; gap:10px; margin-bottom:10px;">
      <button class="rolBtn" data-rol="admin">Admin</button>
      <button class="rolBtn" data-rol="docente">Docente</button>
      <button class="rolBtn" data-rol="estudiante">Estudiante</button>
    </div>

    <button id="loginBtn">Iniciar sesión</button>

    <p class="register">¿No tienes una cuenta? <span>Regístrate aquí</span></p>
  </div>
</div>
`;

let selectedRol = null;


this.querySelectorAll(".rolBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedRol = btn.dataset.rol;

   
    this.querySelectorAll(".rolBtn").forEach(b => b.style.background = "");
    btn.style.background = "#4CAF50";
  });
});


this.querySelector("#loginBtn").addEventListener("click", async () => {

  if (!selectedRol) {
    alert("Selecciona un rol");
    return;
  }

  const mail = document.getElementById("mail").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!mail || !password) {
    alert("Completa los campos");
    return;
  }

  try {
    const response = await fetch("https://alertas-backend.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mail, password })
    });

    if (!response.ok) {
      const err = await response.json();
      alert(err.detail);
      return;
    }

    const data = await response.json();

    
    localStorage.setItem("rol", selectedRol);
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("id_user", data.id_user);
    localStorage.setItem("name", data.name);

    window.location.href = "dashboard.html";

  } catch (error) {
    alert("Error de conexión");
  }

});

}

}

customElements.define("app-login", LoginComponent);