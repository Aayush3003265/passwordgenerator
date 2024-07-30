
const pass = document.querySelector('#pass');
const modes = document.getElementById('mode');


const generatePass = (lengthh, chars) =>{
    let password = '';
    for(let i = 0; i< lengthh; i++){
        const randomnum = Math.floor(Math.random() * chars.length);
        password +=  chars[randomnum];
    }
    return password;
}



const passGen = () =>{
     const modeValue = modes.options[modes.selectedIndex].value;
     console.log(modeValue);
     
    let password = '';
     const easyChars = 'abcdefghijklmnopqrstuvwxyz';
     const mediumChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#';
     const hardChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,<>?';
     
    
     switch(modeValue){
        case 'easy' :
            password = generatePass(8 , easyChars)
            break;
        ;
        case 'medium':
            password = generatePass(10 , mediumChars)
            break;
        ;
        case 'hard':
            password = generatePass(14 , hardChars)
            break;
        default:{
                password = `select a word`
            }
        
     }
     pass.innerHTML = password;
    //  console.log(`${2+=2}`);
}

