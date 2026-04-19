class SubjectsTable extends HTMLElement {

connectedCallback(){

this.innerHTML = `
<h2>Lista de Materias</h2>

<table id="subjectsTableDisplay">

<thead>
<tr>
<th>Materia</th>
<th>Créditos</th>
<th>Programa</th>
<th>Acciones</th>
</tr>
</thead>

<tbody id="subjectsTable"></tbody>

</table>
`;

}

}

customElements.define("subjects-table", SubjectsTable);