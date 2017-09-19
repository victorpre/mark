var codeMirror;
var codeMirrorDoc;
$( document ).ready(function() {
    $(function() {
       var testEditor = editormd("test-editormd", {
            width   : "90%",
            height  : 640,
            syncScrolling : "single",
            path    : "../lib/",
            taskList: true,
            tabSize: 2,
            indentUnit: 2,
            tex: true,
            onload: loadedEditor,
            onchange: handleLine
        });
    });

    function loadedEditor() {
        codeMirror = this.cm;
        codeMirrorDoc = this.cm.doc;
        console.log(codeMirror);
    }

    function handleLine(){
        codeMirrorDoc.eachLine( function(line){
            var ln = codeMirrorDoc.getLineNumber(line);
            var hashtagSym = codeMirror.getTokenAt({line: ln, ch: 1});
            if(hashtagSym.string == "#") {
                console.log(hashtagSym);
                codeMirrorDoc.addLineClass(ln, "text", "is-h1" );
                var content = $('.is-h1 .cm-header-1').text().replace(/\#/g,'<span class="test">H1 </span>');
                // $('.is-h1 .cm-header-1').html(content);
            }
        });
    }
});
