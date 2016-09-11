var names = [5];
for (var i = 0; i < 5; i++) {
    var name = prompt('Введите' + ' ' + (i + 1) + ' ' + 'имя' + ' ' + ': ');
    names[i] = name;   
}
var userName = prompt("Введите имя: ");
if (!inspection(userName)) {
    alert("Упс, такого имени нету, введите другое имя");
}
function inspection(name) {
    for (var i = 0, l = names.length; i < l; i++) {
        if (names[i] == name) {
            alert(name + ', вы успешно вошли');
            return true;
        }
    }
    return false;
}