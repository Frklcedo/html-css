const regchar = /[^a-z]/;
function clicking(id){
    if(document.getElementById(id).placeholder != ""){
        document.getElementById(id).value = document.getElementById(id).placeholder;
        document.getElementById(id).placeholder = "";
    }
}
function validName(id,idInvalid){
    let name = document.getElementById(id).value;
    if(name.length>0){
        let containsnum = false;
        let index;
        for(i=0; i<10;i++){
            if(name.indexOf(i) != -1){
                containsnum = true;
                break;
            }
        }
        if(containsnum){
            document.getElementById(idInvalid).innerHTML = "Nome inválido; números não são permitidos";
            document.getElementById(id).placeholder = name;
            document.getElementById(id).value = "";
        }
    }
    else{
        document.getElementById(idInvalid).innerHTML = "Por favor, digite seu nome";
    }
}

// passtojs confpw newpw
function validatePassword(){
    let passwd = [
        document.getElementById('newpw').value,
        document.getElementById('confpw').value
    ];
    if(passwd[0] != "" && passwd[1] != ""){
        if(passwd[0] === passwd[1]){
            let samepass = passwd[0].toLowerCase();
            if(samepass.length>=8){
                let nums = 0;
                let chars = 0;
                for(i=0; i<samepass.length;i++){
                    if(samepass[i]>=0 && samepass[i]<=9){
                        nums++;
                    }
                }
                console.log(samepass.search(regchar));
                if(samepass.search(regchar)>=0){
                    chars++;
                }
                if(chars>0 && nums>0){
                    return;
                }
                else{
                    document.getElementById('pwcheck').innerHTML = "A senha deve conter pelo menos um letra e um número";
                }
            }
            else{
                document.getElementById('pwcheck').innerHTML = "A senha precisa ter pelo menos 8 caracteres";
            }
        }
        else{
            document.getElementById('pwcheck').innerHTML = "As senhas precisam ser iguais";
        }
        document.getElementById('newpw').value = '';
        document.getElementById('confpw').value = '';
    }
}

