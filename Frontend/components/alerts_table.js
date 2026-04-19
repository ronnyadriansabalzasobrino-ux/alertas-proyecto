class AlertsTable extends HTMLElement {

connectedCallback(){

this.innerHTML = `
<h2>Lista de Alertas</h2>

<table id="alertsTableDisplay">

<thead>
<tr>
<th>Estudiante</th>
<th>Tipo</th>
<th>Descripción</th>
<th>Riesgo</th>
<th>Estado</th>
<th>Acciones</th>
</tr>
</thead>

<tbody id="alertsTable"></tbody>

</table>
`;

}

}

customElements.define("alerts-table", AlertsTable); 