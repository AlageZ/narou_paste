function lr_p(e){
    let con = document.getElementById("htmldiv")
    let txt = document.getElementById("txtarea")
    txt.value = con.innerHTML.toString().replace(/\n/g,"").replace(/<ruby[^>]*>/g, "|").replace(/<rt[^>]*>/g, "《").replace(/<\/rt>/g, "》").replace(/<br>/g,"\n").replace(/<\/p>/g,"\n").replace(/<[^>]*>/g,"").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&')
}
function rl_p(e){
    let con = document.getElementById("htmldiv")
    let txtd = document.getElementById("txtarea").value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, "&quot;")
    txtd = txtd.replace(/(｜|\|)([^《]*)《([^》]*)》/g,"<ruby>$2<rt>$3</rt></ruby>")
    txtd = txtd.replace(/^/gm,"<p>").replace(/$/gm,"</p>")
    con.innerHTML = txtd
}