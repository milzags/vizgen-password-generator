// function to create a new password - iterates over the chars string
// and selects random chars based on the desired password length
function newPassword(passLength) {
    //initialize the password as an empty string
    let newPass = '';
    let allChars = 'qwertyuiop[]QWERTYUIOP{}|asdfghjkl;ASDFGHJKL:zxcvbnm,./ZXCVBNM<>?1234567890-=!@#$%^&*()_+'; 
    // let noCapsSymbolsNums = 'qwertyuiopasdfghjklzxcvbnm';
    // let noCapsSymbols = 'qwertyuiopasdfghjklzxcvbnm1234567890';
    // let noCaps = 'qwertyuiop[]asdfghjkl;,./1234567890-=!@#$%^&*()_+{}:<>?';

    for (let i = 0; i < passLength; i++) {
        newPass += allChars.charAt(Math.floor(Math.random() * allChars.length))
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
    
    const passwordElement = document.getElementById('password-value');
    //set inner text to the new password 
    passwordElement.innerText = newPassword(passLength);
    passwordElement.classList.add('px-2');
    passwordElement.classList.add('font-weight-light')
    
    }  
});

