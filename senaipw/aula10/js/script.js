function exibirMsg(id){
    let nomeDog = document.getElementById(id).value
    alert("Vai tomar banho, " + nomeDog + ". Ninguem mandou se sujar!");
}

function toUC(id){
    let textField = document.getElementById(id).value;
    document.getElementById(id).value = textField.toUpperCase();
}