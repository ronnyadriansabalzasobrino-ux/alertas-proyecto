class Footer extends HTMLElement {

connectedCallback(){

this.innerHTML = `
<footer style="text-align:center; padding:10px;">
© 2026 Sistema Escolar
</footer>
`;

}

}

customElements.define("app-footer", Footer);