//text node

/*const h = document.createElement('h1')//<h1></h1>
var myvalue = document.createTextNode("hello megha")//hello megha
h.appendChild(myvalue)//<h1>hello megha</h1>
document.querySelector('h1').appendChild(h)

var ul = document.getElementById('list')
var li


var addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click',removeItem)

var clearButton = document.getElementById('clear')
clearButton.addEventListener('click',clearItem)


function addItem() {
    var input = document.getElementById('one')
    var item = input.value;
    ul = document.getElementById('list')
    var textnode = document.createTextNode(item)

    if (item === '') {
        let para = document.createElement('p')
        para.textContent = ("Please enter Todo")
        //para.appendChild(myvalue)
        document.querySelector('.controls').append(para)
        setTimeout(() => {para.remove()},3000)
    }
    else {
        li = document.createElement('li');//create li
        // create checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'check')
        //create label
        var label = document.createElement('label')
        label.setAttribute('for', 'item')

        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])
        //li.className = 'visual'

        setTimeout(() => {
            li.className = 'visual'
        }, 500)
        input.value=''

    }
}


function removeItem() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}

function clearItem() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {

        ul.remove()
    }
}*/


var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem)


function addItem() {
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item)

    if (item === '') {
        return false;
        //Add a p tag and assign a value of "Enter your todo"
    } else {
        //create li
        li = document.createElement('li');

        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        //create label
        var label = document.createElement('label');
        label.setAttribute('for', 'item') //optional

        //add these elements on web page

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);

        setTimeout(() => {
            li.className = 'visual';
        }, 2);


        input.value = '';

    }

}

function removeItem() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }

    }


}