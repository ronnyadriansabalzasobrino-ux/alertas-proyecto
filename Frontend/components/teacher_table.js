class TeachersTable extends HTMLElement {

connectedCallback(){

this.innerHTML = `
<h2>Lista de Docentes</h2>

<table id="teachersTableDisplay">

<thead>
<tr>
<th>Nombre</th>
<th>Apellido</th>
<th>Email</th>
<th>Teléfono</th>
<th>Especialidad</th>
<th>Acciones</th>
</tr>
</thead>

<tbody id="teachersTable"></tbody>

</table>
`;

}

}

customElements.define("teachers-table", TeachersTable);