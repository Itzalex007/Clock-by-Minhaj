// console.log("minhaj");
var hour = document.getElementById("hourr")
var minute = document.getElementById("minutee")
var second = document.getElementById("secondd")
var music = new Audio("m.mp3")

setInterval(()=>{

    d = new Date() 
    hTime = d.getHours()
    mTime=d.getMinutes()
    sTime=d.getSeconds()
    hRotation = 30*hTime + mTime/2
    mRotation = 6*mTime
    sRotation =6*sTime
    
    hour.style.transform =`rotate(${hRotation}deg)`
    minute.style.transform =`rotate(${mRotation}deg)`
    second.style.transform =`rotate(${sRotation}deg)`
    
    music.play()
},1000)
