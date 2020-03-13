

// // var htmlParser = require('html-parser');
// var {parse} = require('node-html-parser');
 
// var html = /* html*/`
// <style>

// #rootApp {
//   -webkit-overflow-scrolling: touch;
//   padding-top: 5px;
// }
// .APP_Loading{
//   color: #eee;
// }
// .APP_Loading.loading{
//   color: #888;
// }
// @media screen and (max-width: 600px) {
//   body {
//     font-size: 40px;
//   }
//   ::-webkit-scrollbar {
//     width:0px;
//   }
// }

// </style>
// <div id='rootApp' class='bg-c' jdom='root' jstyle="overflow-y:{{$.bodyFix}}?'hidden':'auto';height:{{$.height}}">
// <i class="j-icon icon-bars menu-bar" jon='this.showMenu=true'></i>
// <div id="menu" jattr='class:({{$.showMenu}})?"open":""' jif='showMenuInPc:class[|pc-hide]'>
//   <i class="j-icon icon-chevron-left icon-pc-show-menu" jif='showMenuInPc:class[|pc-hide]' jon='this.showMenuInPc=!this.showMenuInPc'></i>
//   <div class='logo-text' jif='showMenuInPc:class[|pc-hide]'>
//     <img class='logo-img' src="jet.png">JET
//   </div>
//   <div jload='@routerMenu' jonload='onmenuload'>
//     <div class='APP_Loading'><i class="j-icon icon-spinner-indicator icon-spin"></i></div>
//   </div>
// </div>
// <div id="main" jif='showMenuInPc:class[|pc-hide]'>
//   <div id='header' jload='@header' :show-menu='showMenu' @jump-to='jumpTo'>
//   </div>
//   <div Jout id='routerOut' jdom='out'>
//     <div class='APP_Loading loading'><i class="j-icon icon-spinner-indicator icon-spin"></i></div>
//   </div>
//   <div id='footer' jif='showMenuInPc:class[|pc-hide]' jload='@footer' jonload='onfooterload'>
//   </div>
// </div>
// <div jattr='class:({{$.showMenu}})?"menu-bar-cover open":"menu-bar-cover"' jon='this.showMenu=false'></div>
// </div>
// <script src='root.js' jpath='false'></script>


// `;
// let d = new Date();
// const root = parse(html, {
//     lowerCaseTagName: false,  // convert tag name to lower case (hurt performance heavily)
//     script: true,            // retrieve content in <script> (hurt performance slightly)
//     style: true,             // retrieve content in <style> (hurt performance slightly)
//     pre: false,               // retrieve content in <pre> (hurt performance slightly)
//     comment: false            // retrieve comments (hurt performance slightly)
// });
// console.log((new Date()) - d);
// console.log(root);

// const hello = 'Hello world!';
// htmlParser.parse(html, {
//     openElement: function(name) { console.log('open: %s', name); },
//     closeOpenedElement: function(name, token, unary) { console.log('token: %s, unary: %s', token, unary); },
//     closeElement: function(name) { console.log('close: %s', name); },
//     comment: function(value) { console.log('comment: %s', value); },
//     cdata: function(value) { console.log('cdata: %s', value); },
//     attribute: function(name, value) { console.log('attribute: %s=%s', name, value); },
//     docType: function(value) { console.log('doctype: %s', value); },
//     text: function(value) { console.log('text: %s', value); }
// });

// let main = () => {
//     console.log(hello);
//     alert(hello);
// };

// main();


var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');
var Hook = function () {};
// eslint-disable-next-line no-unused-vars
Hook.prototype.hook = function (node, propertyName, previousValue) {
    console.log('Hello, World');
};
// 1: Create a function that declares what the DOM should look like
function render (count)  {
    return h('div', {
        style: {
            textAlign: 'center',
            lineHeight: (100 + count) + 'px',
            border: '1px solid red',
            width: (100 + count) + 'px',
            height: (100 + count) + 'px'
        },
        id: 'aaa',
        onclick () {
            console.log(1);
        },
        'my-hook': new Hook()
    }, [String(count)]);
}
 
// 2: Initialise the document
var count = 0;      // We need some app data. Here we just store a count.
 
var tree = render(count);               // We need an initial tree
var rootNode = createElement(tree);     // Create an initial root DOM node ...
window.tree = tree;
document.body.appendChild(rootNode);    // ... and it should be in the document
 
// 3: Wire up the update logic
setInterval(function () {
    count++;
    if (count < 20) {
        var newTree = render(count);
        var patches = diff(tree, newTree);
        rootNode = patch(rootNode, patches);
        tree = newTree;
    }
}, 1000);