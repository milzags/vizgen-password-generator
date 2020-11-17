//initialize the password as an empty string
let newPass = '';
// function to create a new password - iterates over the chars string
// and selects random chars based on the desired password length
function newPassword(passLength) {
    let chars = 'qwertyuiop[]QWERTYUIOP{}|asdfghjkl;ASDFGHJKL:zxcvbnm,./ZXCVBNM<>?1234567890-=!@#$%^&*()_+'; 
    for (let i = 0; i < passLength; i++) {
        newPass += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return newPass;
};

// select the generate button
let generateButton = document.querySelector('button');
// create event listening on the generate button.

generateButton.addEventListener('click', function(ev) {
    ev.preventDefault();
    //create new <H4> element to add to the result div -> pass added to this <h4>
    let passwordElement = document.createElement('H4');
    
    //get the integer value of the length selection on the page
    let passLength = parseInt(document.getElementById('inputvalue').value);
    if (passLength < 8 || passLength > 32) {
        alert('Please enter a valid number within the specified range (8-32)');
    } else {
    
    //select the div where the password result will be appended
    let passResult = document.getElementById('password-area');

    //invoke newPassword function with the pass length integer value   
    newPassword(passLength);
    passResult.append(passwordElement);
    passwordElement.innerText = newPass;
    passwordElement.classList.add('px-2');
    passwordElement.classList.add('font-weight-light')
    
    }  
});

    
