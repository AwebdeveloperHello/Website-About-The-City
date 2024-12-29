const jsFrame2 = new JSFrame();
const frame2 = jsFrame.create({
    title: 'Optimization',
    left: 20, top: 20, width: 320, height: 220,
    movable: true,
    resizable: true,
    html: '<div id="my_element" style="padding:10px;font-size:12px;color:darkgray;">If the website looks bad or incorrect, use the keyboard shortcut Ctrl+Shift+ -/+ to change the screen size.</div>',
});


function ShowClueEg() {
  frame2.show();
}