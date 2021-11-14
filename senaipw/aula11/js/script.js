const CPFL = 11;
const MAJORAGE = 18;
function toUpperCase(id){
    let name = document.getElementById(id).value;
    document.getElementById(id).value = name.toUpperCase();
}
function noChar(id){
    let noCharStr = document.getElementById(id).value;
    noCharStr = noCharStr.replace(/[^0-9-.]/g,"");
    document.getElementById(id).value = noCharStr;
}
function cpfMasc(id){
    let cpf = document.getElementById(id).value;
    const NONUM = /[^0-9]/gi;
    cpf = cpf.replace(NONUM,'');
    let cpfhalf;
    if(cpf.length >= 3){
        cpfhalf = cpf.slice(3, cpf.length);
        cpf = cpf.slice(0,3);
        cpf += "." + cpfhalf;
        if(cpf.length>=7){
            cpfhalf = cpf.slice(7, cpf.length);
            cpf = cpf.slice(0,7);
            cpf += "." + cpfhalf;
            if(cpf.length>=11){
                cpfhalf = cpf.slice(11, cpf.length);
                cpf = cpf.slice(0,11);
                cpf += "-" + cpfhalf;
            }
        }
    }
    document.getElementById(id).value = cpf;
}
function validateCpf(id){
    let cpf = document.getElementById(id).value;
    let numCpf = cpf;
    let error = false;
    numCpf = numCpf.replace('-','');
    for(let i = 0; i<3;i++){
        numCpf = numCpf.replace('.','');
    }
    let cpfLength = numCpf.length;
    if(cpfLength !== CPFL){
        error = true;
    }
    
    else{
        
        let wrongCpf = 11111111111;
       
        switch(Number(numCpf)){
            case wrongCpf*1:
            case wrongCpf*2:
            case wrongCpf*3:
            case wrongCpf*4:
            case wrongCpf*5:
            case wrongCpf*6:
            case wrongCpf*7:
            case wrongCpf*8:
            case wrongCpf*9: error=true;
        }
        unset($wrongcpf);
        
        for(let uncpf=0,i = 0; i<11; i++){
    
            uncpf+=Number(String(numCpf).substr(i,1));
    
        }
         
        deccpf=0;
    
        while(uncpf>=10){
    
            uncpf-=10;
            deccpf+=1;
    
        }
    
        if(uncpf === deccpf){
            error = false;
        } 
        else error = true;
    }
    if(error){
        document.getElementById('cpfchecker').innerHTML = "CPF inválido";
    }
}
function readAge(id){
    let age = document.getElementById(id).value;
    if(age < MAJORAGE){
        alert('Infelizmente você é menor de idade');
    }
}
