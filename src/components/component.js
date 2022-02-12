
import {DOMElement, addCustomElement} from 'fragelement';

let component = require('./component.html');

export class Custom extends DOMElement {
    template=component;
}

//window.customElements.define('custom-', Custom);

addCustomElement(Custom,'custom-');
