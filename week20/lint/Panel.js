import { createElement, Text, Wrapper } from './createElement.js';

export class Panel {
    constructor(config) {
        this.children = [],
        this.attributes = new Map();
        this.properties = new Map();
    }

    setAttribute(name, value) {
        this[name] = value;
    }

    appendChild(child) {
        this.children.push(child);
    }

    render() {
        return <div class="panel" style="border: 1px solid lightgreen; width: 300px">
            <h1 style="background-color: lightgreen; width: 300px; margin:0">{this.title}</h1>
            <div style="width:300px; min-height: 300px;">
                {this.children}
            </div>
        </div>;
    }

    mounted(parent) {
        this.render().mounted(parent);
    }
}
