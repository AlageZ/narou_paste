function lr_p(e){
    let con = document.getElementById("htmldiv")
    let txt = document.getElementById("txtarea")
    txt.value = con.innerHTML.toString().replace(/<ruby [^>]*>/g, "|").replace(/<rt [^>]*>/g, "《").replace(/<\/rt>/g, "》").replace(/<br>/g,"\n").replace(/<\/p>/g,"\n").replace(/<[^>]*>/g,"").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&')


}
