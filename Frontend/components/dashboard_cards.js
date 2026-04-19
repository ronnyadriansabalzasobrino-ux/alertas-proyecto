class DashboardCards extends HTMLElement {

connectedCallback(){

const rol = localStorage.getItem("rol");

let cardsHTML = "";


if (rol === "admin") {
  cardsHTML = `
    <dashboard-card text="Estudiantes" action="goStudents()"></dashboard-card>
    <dashboard-card text="Docentes" action="goTeachers()"></dashboard-card>
    <dashboard-card text="Materias" action="goSubjects()"></dashboard-card>
    <dashboard-card text="Alertas" action="goAlerts()"></dashboard-card>
  `;
}


if (rol === "docente") {
  cardsHTML = `
    <dashboard-card text="Estudiantes" action="goStudents()"></dashboard-card>
    <dashboard-card text="Materias" action="goSubjects()"></dashboard-card>
    <dashboard-card text="Alertas" action="goAlerts()"></dashboard-card>
  `;
}


if (rol === "estudiante") {
  cardsHTML = `
    <dashboard-card text="Materias" action="goSubjects()"></dashboard-card>
  `;
}


if (!rol) {
  window.location.href = "login.html";
  return;
}

this.innerHTML = `
<section class="cards">
  ${cardsHTML}
</section>
`;

}

}

customElements.define("dashboard-cards", DashboardCards);