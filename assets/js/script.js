function sendMail(params) {
    var tempParams ={
        from_name:document.getElementById("fromName").value,
        to_name:document.getElementById("toName").value,
        message:document.getElementById("message").value,
    };

    emailjs.send('gmail', 'template_46s4qbm', tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
}