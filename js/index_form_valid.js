//
// Formas satura pārbaude
//
function valueExist(Elem) {
    var ELemParent = Elem.parentElement;
    if (ELemParent.children.length > 1) ELemParent.children[1].remove()
    Elem.classList.remove('input-err');
    if (!Elem.value.trim()) {
        var msgErr = document.createElement('span');
        msgErr.className = 'message-err';
        msgErr.innerHTML = 'Obigāti ievadiet vērtību!';
        Elem.classList.add('input-err');
        Elem.focus();
        ELemParent.appendChild(msgErr);
        return false
    }
    return true
}

$('#inputName').onkeyup = function(e) {
    valueExist(this);
}
$('#inputEmail').onkeyup = function(e) {
    valueExist(this);
}
$('#inputMessage').onkeyup = function(e) {
    valueExist(this);
}


$('#input-form').onsubmit = function(e) {
        var inputOK = true
        inputOK &= valueExist($('#inputMessage'));
        inputOK &= valueExist($('#inputEmail'));
        inputOK &= valueExist($('#inputName'));
        if (!!inputOK) m('Dati tiks nosūtīti...')
        return false;
    }
//
