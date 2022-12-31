function submitForm(){
    let fname = document.getElementById('First-Name').value;
    let Lname = document.getElementById('Last-Name').value;
    let email = document.getElementById('Email-address').value;
    console.log(fname,Lname,email);
    if(fname && Lname && email){
       alert("Form Submitted SuccessFully");
    }else{
        alert("Please Fill Mandatory Details");
    }


}