import { createElement, Text, Wrapper } from './createElement.js';

export class TabPanel {
    constructor(config) {
        this.children = [],
        this.attributes = new Map();
        this.properties = new Map();
        this.state = Object.create(null);
    }

    setAttribute(name, value) {
        this[name] = value;
    }

    getAttribute(name) {
        return this[name];
    }

    appendChild(child) {
        this.children.push(child);
    }

    select(i) {
        for (let view of this.childViews) {
            view.style.display = 'none';
        }
        this.childViews[i].style.display = "";

        for (let view of this.titleViews) {
            view.classList.remove('selected');
        }
        this.titleViews[i].classList.add('selected');

        this.titleViews.innerText = this.children[i].title;
    }

    render() {

        this.childViews = this.children.map(child => <div style="width:300px; min-height: 300px;">{child}</div>);
        this.titleViews = this.children.map((child, i) => <span onClick = {() => this.select(i)}>{child.getAttribute("title") || " "}</span>);

        setTimeout(() => this.select(0), 16);
        return <div class="tab-panel" style="border: 1px solid lightgreen; width: 300px">
            <h1 style="background-color: lightgreen; width: 300px; margin:0">{this.titleViews}</h1>
            <div>
                {this.childViews}
            </div>
        </div>;
    }

    mounted(parent) {
        this.render().mounted(parent);
    }
}
