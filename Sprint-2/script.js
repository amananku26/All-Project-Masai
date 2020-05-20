function myFunction() {
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    var sci = document.getElementById("sci").value
    var eng = document.getElementById("eng").value
    var math = document.getElementById("math").value
    display(name, age, sci, eng, math)
    var div1 = document.createElement('div')
    div.textContent = 'item'
    var body = document.querySelector('body')
    body.append(div)
    reset();
}
function showTotal() {
    var mathss = document.getElementById("math").value
    var sciencee = document.getElementById("sci").value
    var englishh = document.getElementById("eng").value
    var totalll = mathss - (-sciencee) - (-englishh)
    document.getElementById("total").value = totalll
}
function display(name, age, sci, eng, math, total) {
    var div1 = document.getElementById('res1');
    var div2 = document.getElementById('res2');
    var div3 = document.getElementById('res3');
    var div4 = document.getElementById('res4');
    var div5 = document.getElementById('res5');
    var div6 = document.getElementById('total');
    div1.textContent = name
    div2.textContent = age
    div3.textContent = sci
    div4.textContent = eng
    div5.textContent = math
    div6.textContent = total
    display(name, age, sci, eng, math)
    var div1 = document.createElement('div')
    div.textContent = 'item'
    var body = document.querySelector('body')
    body.append(div)

}



