class CardComponent extends HTMLElement {

connectedCallback(){

const text = this.getAttribute("text");
const action = this.getAttribute("action");

this.innerHTML = `
<div class="card" onclick="${action}">
${text}
</div>
`;

}

}

customElements.define("dashboard-card", CardComponent);