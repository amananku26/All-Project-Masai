var btn;

function add() {
    var insert = document.getElementById('insert')
    var div = document.createElement('div')
    var p = document.createElement('p')
    p.textContent = insert
    var btn = document.createElement('button')
    button.textContent = "remove"
    btn.addEventListener('click', removeItem)
    div.append(p, btn)

    renderDom(insert)

}

function removeItem(div) {
    event.target.parentElement.remove()
}

function renderDom(element) {
    var target = document.getElementById('res1')
    target.append(element)
}

window.addEventListener('load', function() {
    btn = document.getElementById('submit')
    btn.addEventListener('click', add)
})