
// Task 1
// function fun1() {
//     var checkbox;
//     checkbox = document.getElementById('one');

//     if (checkbox.checked) {
//         alert('Выбран');
//     } else {
//         alert('Не выбран');
//     }
// }

// Task 2
function fun2() {
    var radi = document.getElementsByName('r1');
    for (var i = 0; i < radi.length; i++) {
        if (radi[i].checked) {
            alert('Выбран ' + i + ' элемент');
        }
    }
}
