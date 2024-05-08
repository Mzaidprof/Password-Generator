const inputElement = document.getElementById("input-area");
const button = document.querySelector(".btn");
const resetButton = document.getElementById("title");

resetButton.addEventListener("click", () => {
    document.getElementById("input-area").value = "";
});

function GeneratePassword(){
    let letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz/@#$%';
    let lettersArray = letters.split('');
    var password = '';
    const passwordLength = parseInt(document.getElementById("PasswordLength").value);
    for(let i = 0; i < passwordLength; i++)
    {
        password += lettersArray[Math.floor(Math.random()*lettersArray.length)];
    }
    document.getElementById("input-area").value = password;
}

button.addEventListener("click",function(){
    GeneratePassword();
});
