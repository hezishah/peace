
Keysim = require('keysim')

nw.Window.open('https://translate.google.co.il/#en/ar', {
    'new_instance': false, 'fullscreen': true
 },function(win){
    win.on('loaded',function()
    {
        doc = win.window.document;
        input = doc.getElementById('source');
        var fullStr = "Nothing is more interesting than music.\r\
        Peace will prevail if all will learn to play an instrument";
        var i = 0;
        var inter = setInterval(func, 50);
        function func()
        { 
            if (i<fullStr.length) 
            {
                input.value += fullStr[i];
                i++;
            }
            else
            {
                var div = doc.getElementById('gt-res-listen');
                /*let div = doc.getElementById('gt-res-share');*/
                let span = div.children[0];
                var down = new MouseEvent('mousedown');
                var up = new MouseEvent('mouseup');
                div.dispatchEvent(down);
                div.dispatchEvent(up);
                clearInterval(inter);
            } 
        }
    });
 });

 
