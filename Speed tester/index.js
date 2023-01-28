

let word = document.getElementById("words-data")
let start = document.getElementById('startbtn')
let res = document.getElementById('words')

let multival = ['Hello1','hello2','hello3','Hello4','hello5','Hello6']

const playgame =()=>{
    let rannum = Math.floor(Math.random()*multival.length)
    console.log(rannum)
    console.log('Hello')
    res.innerText = multival[rannum]
    date = new Date()
    time = date.getTime()
    start.innerText = 'Done'
}

const endplay =() =>{
    date = new Date()
    endtime = date.getTime()
    let totaltime = ((endtime - time)/1000)
    console.log(totaltime)
    let totalstr = word.value
    cal = wordcounter(totalstr)
    let finalword = 'you typed total at ' + totaltime + ' word per minute'
    res.innerText = finalword
}

const wordcounter = (pstr)=>{
    let length =  pstr.match(/\w+/g).length

}


start.addEventListener('click',()=>{
    
    if(start.innerText == 'Start'){
     word.disable = false;
     playgame()
    }else if(start.innerText == 'Done'){
word.disable = true
start.innerText = 'Start'
endplay()
    }
})
