let input=document.getElementById("inputtext");
    let img=documnent.getElementById("imgqr");
    function genrate(){
        imgqr.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputtext.value;
}