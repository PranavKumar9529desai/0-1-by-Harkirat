const { trace } = require('console');
const jwt = require('jsonwebtoken');
const jwtpassword = "pranv's password";

const payload = {
        username : "dpranav7745@mail.com" ,
        password : "pumara"
}

function createJWT(){
    if(!validateEmail(payload.username) || payload.password.length < 6) return null;
    try {
        const token = jwt.sign(payload,jwtpassword); 
        return token;
    } catch (error) {
         throw error;
    }
}

function veriyJWT(token){
try {
    jwt.verify(token,jwtpassword);
    return "verified";
} catch (error) {
    return false;
}
}

function decodeJwt(token){
    try {
      const decoded = jwt.decode(token);
      return decoded ;
    } catch (error) {
        return false ;

    }
}

function validateEmail(useranme){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(useranme);
};


console.log(createJWT());
console.log(veriyJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRwcmFuYXY3NzQ1QG1haWwuY29tIiwicGFzc3dvcmQiOiJwdW1hcmEiLCJpYXQiOjE3MDM4MzI1ODB9.xMqBAumTr2EFbxUhBIDoRtk-WvpaHZjuyvx3zvzMnKU")
);

console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRwcmFuYXY3NzQ1QG1haWwuY29tIiwicGFzc3dvcmQiOiJwdW1hcmEiLCJpYXQiOjE3MDM4MzI1ODB9.xMqBAumTr2EFbxUhBIDoRtk-WvpaHZjuyvx3zvzMnKU"));