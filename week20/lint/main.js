import { createElement, Text, Wrapper } from './createElement.js';

import { Carousel } from './Carousel';
import { Panel } from './Panel';
import { TabPanel } from './TabPanel';
import { ListView } from './ListView';

import css from './carousel.css';
console.log(css);
/*
let style = document.createElement('style');
style.innerHTML = css[0][1];
document.documentElement.appendChild(style);
*/

let component = <Carousel data={[
    "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
    "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
    "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
    "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg",
]}>
</Carousel>

component.mounted(document.body);

/*
let panel = <Panel title="this is a title">
    <span>this is a content</span>
</Panel>
*/
/*
let panel = <TabPanel>
    <span title='title1'>this is a content1</span>
    <span title='title2'>this is a content2</span>
    <span title='title3'>this is a content3</span>
    <span title='title4'>this is a content4</span>
</TabPanel>

panel.mounted(document.body);
*/
/*
let data = [
    {title: "蓝猫", url: "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg"},
    {title: "胖橘", url: "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg"},
    {title: "灰猫", url: "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg"},
    {title: "橘猫", url: "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg"}
]

let list = <ListView data={data}>
    {
        record => <figure>
            <img src={record.url}></img>
            <figcaption>{record.title}</figcaption>
        </figure>
    }
</ListView>
list.mounted(document.body);
*/