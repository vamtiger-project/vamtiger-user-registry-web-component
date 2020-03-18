export default `@-webkit-keyframes a{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@keyframes a{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}:host{display:inline-block;position:relative;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-tap-highlight-color:transparent;opacity:0}:host a,:host button,:host figure,:host h1,:host h2,:host h3,:host h4,:host h5,:host h6{margin:0;padding:0;border:none;outline:none;-webkit-appearance:none;text-decoration:none}:host [data-vamtiger-user-listing]{height:100%;position:relative;display:grid;grid-template-rows:300px 3fr 50px}:host [data-vamtiger-user-listing] [data-test-mode]{position:absolute;top:0;left:0;z-index:4;display:grid;grid-gap:.5em;padding:1em;font-size:1em;text-transform:uppercase;background-color:#fff;visibility:hidden}:host [data-vamtiger-user-listing] [data-test-mode] [data-separator]{height:1px;background-color:#d3d3d3}:host [data-vamtiger-user-listing] [data-test-mode] [data-layout-markers-controls]{display:grid;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;grid-gap:1em}:host [data-vamtiger-user-listing] [data-test-mode] [data-layout-markers-controls] [data-layout-markers-toggle]{height:1em;display:grid;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;position:relative}:host [data-vamtiger-user-listing] [data-test-mode] [data-layout-markers-controls] [data-layout-markers-toggle]:after,:host [data-vamtiger-user-listing] [data-test-mode] [data-layout-markers-controls] [data-layout-markers-toggle]:before{display:inline-block;content:"";height:100%;grid-column:1;grid-row:1}:host [data-vamtiger-user-listing] [data-test-mode] [data-layout-markers-controls] [data-layout-markers-toggle]:before{background-color:#ffa07a;-webkit-transition:background-color 75ms;transition:background-color 75ms;width:2.5em;border-radius:1em}:host [data-vamtiger-user-listing] [data-test-mode] [data-layout-markers-controls] [data-layout-markers-toggle]:after{background-color:#d3d3d3;width:1em;border-radius:100%;border:1px solid #a9a9a9;-webkit-transform:scale(1.4);transform:scale(1.4);-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;left:0;-webkit-transition:left 75ms;transition:left 75ms}:host [data-vamtiger-user-listing] [data-test-mode] [data-layout-markers-controls] [data-layout-markers-toggle][data-active]:before{background-color:#87cefa}:host [data-vamtiger-user-listing] [data-test-mode] [data-layout-markers-controls] [data-layout-markers-toggle][data-active]:after{left:25px}:host [data-vamtiger-user-listing] [data-header]{display:grid;grid-template-rows:1fr;position:relative}:host [data-vamtiger-user-listing] [data-header]>*{grid-column:1;grid-row:1;width:100%;max-height:100%}:host [data-vamtiger-user-listing] [data-header] [data-header-overlay]{background-color:rgba(0,0,0,.3);z-index:2}:host [data-vamtiger-user-listing] [data-header] [data-header-image]{z-index:1;-o-object-fit:cover;object-fit:cover;position:relative}:host [data-vamtiger-user-listing] [data-header] [data-header-caption]{display:grid;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:3;color:#fff;font-size:2em}:host [data-vamtiger-user-listing] [data-body]{display:grid;grid-template-columns:1fr 3fr 1fr}:host [data-vamtiger-user-listing] [data-body] [data-user-listing]{display:grid;grid-template-rows:50px auto;grid-gap:1em;position:relative}:host [data-vamtiger-user-listing] [data-body] [data-user-listing] [data-action]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;position:-webkit-sticky;position:sticky;top:0;z-index:2;background-color:#fff}:host [data-vamtiger-user-listing] [data-body] [data-user-listing] [data-users]{display:grid;grid-auto-rows:3em;z-index:1}:host [data-vamtiger-user-listing] [data-overlay]{overflow:auto;position:fixed;height:100vh;width:100vw;display:grid;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:3;background:radial-gradient(rgba(0,0,0,.6),#000)}:host [data-vamtiger-user-listing] [data-overlay],:host [data-vamtiger-user-listing] [data-overlay] [data-confirm-delete-user]{visibility:hidden}:host [data-vamtiger-user-listing] [data-overlay][data-confirm]{-webkit-animation:a 135ms linear forwards;animation:a 135ms linear forwards}:host [data-vamtiger-user-listing] [data-footer]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#000;color:#fff;font-weight:1em}:host [data-vamtiger-user-listing] [data-footer] a{color:#fff;cursor:pointer}:host [data-vamtiger-user-listing] [data-footer] [data-separator]{margin:0 .5em;height:50%;width:1px;background-color:#fff}::slotted([slot=action]),[data-action] button{width:8em;display:grid;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#fff;background-color:#000}::slotted([slot=footer]),::slotted([slot=header-image]){width:100%;max-height:100%;position:relative}::slotted([slot=header-image]){-o-object-fit:cover;object-fit:cover}::slotted([slot=user]){display:grid;grid-template-columns:repeat(2,1fr) minmax(auto,4fr);-webkit-box-align:center;-ms-flex-align:center;align-items:center;grid-gap:1em;padding-left:1em}::slotted([slot=overlay]){display:grid;grid-row-gap:1em;padding:2em;background-color:#fff}

/* Layout markers */:host [data-vamtiger-user-listing][data-test-mode] [data-test-mode]{visibility:visible}:host [data-vamtiger-user-listing][data-layout-markers]{background-color:#a9a9a9}:host [data-vamtiger-user-listing][data-layout-markers] [data-test-mode]~:nth-child(odd){background-color:#add8e6}:host [data-vamtiger-user-listing][data-layout-markers] [data-body]>:nth-child(odd){background-color:#ffb6c1}:host [data-vamtiger-user-listing][data-layout-markers] [data-user-listing]>:nth-child(odd){background-color:#90ee90}:host [data-vamtiger-user-listing][data-layout-markers] [data-user-listing]>:nth-child(2n){background-color:#fafad2}:host [data-vamtiger-user-listing][data-layout-markers] [data-action]{background-color:#add8e6}
/*# sourceMappingURL=index.ts.map */`;