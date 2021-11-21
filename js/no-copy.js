document.oncopy = function(){
    var body = document.getElementsByTagName('body')[0];
    var selection = document.getSelection();
    var div = document.createElement('div');

    //div.style.display = 'none';
    div.style.position = 'absolute';
    div.style.zIndex = '-99999';
    body.appendChild(div);
    div.innerHTML = selection + ' [Источник: HookahKiller]';
    selection.selectAllChildren(div);
    
    document.setTimeout(function() {
        body.removeChild(div);
    }, 0);
    
}