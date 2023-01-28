let countdata = document.getElementById('count')
countdata.addEventListener('click',() =>{

let noc = document.getElementById("words-data").value.length
let now = document.getElementById("words-data").value
let res = document.getElementById("res")
now = now.match(/\w+/g).length
console.log(now)
    res.innerHTML = `Total Characters : <strong> ${noc} </strong> Total Words : <strong> ${now} </strong>`

})

// Toggle Mode 

let main = document.getElementsByClassName('container')
const mode = () =>{


}

// remove extra spaces 

const removespaces = () =>{
    let remove = document.getElementById('words-data').value
    let regspac = /\s+/g;
    remove = remove.replace(regspac,' ')
    console.log(remove)
    
}
let str = 'hello my name is hamad'
str = str.replace('hello','hi')
console.log(str)

