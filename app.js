//get the integer value of the length selection on the page
let passLength = parseInt(document.getElementById('inputvalue').value);
//select the div where the password result will be appended
let passResult = document.getElementById('password-area');
//initialize the password as an empty string
let newPass = '';
// select the generate button
let generateButton = document.getElementById('makePass');
//create new <p> element to add to the result div -> pass added to this <p>
const passwordElement = document.createElement('P');
 
// function to create a new password - iterates over the chars string
// and selects random chars based on the desired password length

// create event listening on the generate button.
generateButton.addEventListener('submit', function(ev) {
    ev.preventDefault();
    newPassword(passLength);

    passResult.append(passwordElement);
    passwordElement.innerText = newPass;
    // console.log(passLength);
    //invoke newPassword function with the pass length integer value       
});

    
function newPassword(passLength) {
    let chars = 'qwertyuiop[]QWERTYUIOP{}|asdfghjkl;ASDFGHJKL:zxcvbnm,./ZXCVBNM<>?1234567890-=!@#$%^&*()_+'; 
    for (let i = 0; i <= passLength; i++) {
        newPass += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return newPass;
};

