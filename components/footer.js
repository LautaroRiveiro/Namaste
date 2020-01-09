export default class MiComponente extends HTMLElement {
    constructor(){
        super();
        this.shadowRoot.innerHTML = `
            <div>
                Hola!
            </div>
        `;
    }
}
 
