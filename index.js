
let arr = ["John", "Laura", "Tim", "Dave", "Mary", "Fred"];


let submitBtn = document.querySelector('.submit');
let personTxt = document.querySelector('.person');


let root = document.querySelector('#root');
let selectElement = document.querySelector('#select');

// Create
function addItem(x){
    arr.push(x)
}

// Read
function allItems(){
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// Update
function updateItem(x, y){
    let result = arr.map((n, i) => {
        if(n == x){
            arr[i] = y
            return n
        }
    })
    result = arr
    return result
}

// Delete
function deleteItem(x){
    let thing = arr.filter(n => {n !== x})
    return thing
}


function updateDisplay(){
    root.innerHTML = ""
    selectElement.innerHTML = ""
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        let person = document.createElement('p');
        person.innerHTML = arr[i]
        root.append(person)

        let optionTag = document.createElement('option');
        optionTag.innerHTML = arr[i]
        optionTag.value = arr[i]
        selectElement.append(optionTag)
    }

}


submitBtn.addEventListener('click', () => {
    console.log(personTxt.value);
    arr.push(personTxt.value)
    allItems()
    updateDisplay()
    personTxt.value = ""
});

updateDisplay()

