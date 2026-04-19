class StudentsTable extends HTMLElement {

connectedCallback(){

this.innerHTML = `
<h2>Lista de Estudiantes</h2>

<table id="studentsTableDisplay" class="display">
<thead>
<tr>
<th>Nombre</th>
<th>Apellido</th>
<th>Email</th>
<th>Teléfono</th>
<th>Acciones</th>
</tr>
</thead>
<tbody></tbody>
</table>
`;

}

}

customElements.define("students-table", StudentsTable);