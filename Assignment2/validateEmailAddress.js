var validateEmail = (function(email_id){
var emailContents = /^[a-zA-Z_\.\-]+@[a-zA-Z_\-\.]+?\.[a-zA-Z]{2,4}$/;
return emailContents.test(email_id);
})('nidhi.acadgild@gmail.com');
console.log(validateEmail);