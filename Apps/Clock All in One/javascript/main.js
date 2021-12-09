const stopWatchButton = document.getElementById('stopwatch')
const alarmButton = document.getElementById('alarm')
const timerButton = document.getElementById('timer')

const alramSection = document.getElementById('alarmSection')
const stopWatchSection = document.getElementById('stopWatchSection')
const TimerSection = document.getElementById('TimerSection')


// ============Massages=====================
let stopWatchMassage = document.getElementById('StopWatchMassge')
let alarmMassage = document.getElementById('AlarmMassage')
let TimerMassage = document.getElementById('TimerMassage')

// =============================

// ==========Setting the DarkMode Massage==============

stopWatchMassage.classList.add('show')
stopWatchMassage.innerHTML = "I Also Add a DarkMode If You Wanna Enable Just click The Moon"
setTimeout(()=>{
    stopWatchMassage.classList.remove('show')
    stopWatchMassage.innerHTML = " "
},6000)

// =================================


// massage.classList.add('show')
// massage.innerHTML = "All Value are in Minutes"
// setTimeout(()=>{
//     massage.classList.remove('show')
//     massage.innerHTML = " "
// },2000)


let AlarmAudio = new Audio('Alarm.mp3')
AlarmAudio.loop = true

// seting the loader
const loader = document.getElementById('loader')
setTimeout(()=>{
    loader.style.opacity = "0"
},2000)
// =======

// clock which show the current time
let currentTime = document.getElementById('currentTime')
function ShowCurrentTime(){

let clockTime = new Date()
let seconds = clockTime.getSeconds()
let minutes = clockTime.getMinutes()
let hours = clockTime.getHours()
let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    currentTime.innerHTML = `Current Time--> ${hours}: ${minutes}: ${seconds} ${ampm}`
}
setInterval(ShowCurrentTime,1000)
// ===============

//========================= sliding fuction=========================

stopWatchButton.addEventListener('click',()=>{
    // stopWatchSection.style.display = "block"
    // alramSection.style.display = "none"
    // TimerSection.style.display = "none"

    alramSection.style.opacity = "0"
    alramSection.style.visibility = "hidden"
    alramSection.style.width = "0"
    alramSection.style.height = "0"
    alramSection.style.transform = `translateX(-100rem)`

    stopWatchSection.style.opacity = "1"
    stopWatchSection.style.visibility = "visible"
    stopWatchSection.style.width = "100%"
    stopWatchSection.style.height = "100%"
    stopWatchSection.style.transform = `translateX(0rem)`

    TimerSection.style.opacity = "0"
    TimerSection.style.visibility = "hidden"
    TimerSection.style.width = "0"
    TimerSection.style.height = "0"
    TimerSection.style.transform = `translateX(-100rem)`
})
alarmButton.addEventListener('click',()=>{
    // stopWatchSection.style.display = "none"
    // alramSection.style.display = "block"
    // TimerSection.style.display = "none"
    stopWatchSection.style.opacity = "0"
    stopWatchSection.style.visibility = "hidden"
    stopWatchSection.style.width = "0"
    stopWatchSection.style.height = "0"
    stopWatchSection.style.transform = `translateX(-100rem)`

    alramSection.style.opacity = "1"
    alramSection.style.visibility = "visible"
    alramSection.style.width = "100%"
    alramSection.style.height = "100%"
    alramSection.style.transform = `translateX(0rem)`

    TimerSection.style.opacity = "0"
    TimerSection.style.visibility = "hidden"
    TimerSection.style.width = "0"
    TimerSection.style.height = "0"
    TimerSection.style.transform = `translateX(-100rem)`


})


timerButton.addEventListener('click',()=>{
    // stopWatchSection.style.display = "none"
    // alramSection.style.display = "none"
    // TimerSection.style.display = "block"

    TimerMassage.classList.add('show')
    TimerMassage.innerHTML = "All Value Are in Minutes"
    setTimeout(()=>{
        TimerMassage.classList.remove('show')
        TimerMassage.innerHTML = " "
    },2000)


    alramSection.style.opacity = "0"
    alramSection.style.visibility = "hidden"
    alramSection.style.width = "0"
    alramSection.style.height = "0"
    alramSection.style.transform = `translateX(-100rem)`

    TimerSection.style.opacity = "1"
    TimerSection.style.visibility = "visible"
    TimerSection.style.width = "100%"
    TimerSection.style.height = "100%"
    TimerSection.style.transform = `translateX(0rem)`

    stopWatchSection.style.opacity = "0"
    stopWatchSection.style.visibility = "hidden"
    stopWatchSection.style.width = "0"
    stopWatchSection.style.height = "0"
    stopWatchSection.style.transform = `translateX(-100rem)`
})

// ========================================================





// ========================Stating the StopWatch========================
const stopwatchStartBtn = document.getElementById('StopWatchstartbtn')
const stopwatchResetbtn = document.getElementById('StopWatchresetbtn')
const stopwatchStopbtn = document.getElementById('StopWatchstopbtn')

const stopwatchHours = document.getElementById('Stopwatchhour')
const stopwatchMins = document.getElementById('Stopwatchmintinus')
const stopwatchSeconds = document.getElementById('Stopwatchseconds')
const stopwatchMilliSecond = document.getElementById('Stopwatchmillisecons') 

let stopWatchInerval
let millisecValue = 0
let secValue = 0
let minsValue = 0
let hoursValue = 0

function StartStopWatch(){
    millisecValue ++
    stopwatchMilliSecond.innerHTML = millisecValue
    if(millisecValue > 99){
        millisecValue = 0
        stopwatchMilliSecond.innerHTML = "0" + 0
        secValue ++ 
        // stopwatchSeconds.innerHTML = secValue

        if(secValue > 0){
            stopwatchSeconds.innerHTML = `0${secValue}`
        }
        if(secValue > 9){
            stopwatchSeconds.innerHTML = `${secValue}`
        }
    }
    if(secValue > 59){
        secValue = 0
        stopwatchSeconds.innerHTML = "0" + 0
        minsValue ++

        if(minsValue > 0){
            stopwatchMins.innerHTML = `0${minsValue}`
        }
        if(minsValue > 9){
            stopwatchMins.innerHTML = `${minsValue}`
        }
    }
    if(minsValue > 59){
        minsValue = 0
        stopwatchMins.innerHTML = "0" + 0

        hoursValue ++
        if(hoursValue > 0){
            stopwatchHours.innerHTML = `0${hoursValue}`
        }
        if(hoursValue > 9){
            stopwatchHours.innerHTML = `${hoursValue}`
        }
    }
}

stopwatchStartBtn.addEventListener('click',()=>{
    stopWatchInerval = setInterval(StartStopWatch,10)
})
stopwatchStopbtn.addEventListener('click',()=>{
    clearInterval(stopWatchInerval)
    stopwatchResetbtn.style.opacity = '1'
    stopwatchResetbtn.style.pointerEvents = "visible"
    stopwatchResetbtn.addEventListener('click',()=>{
        hoursValue = 0
        minsValue = 0
        secValue = 0
        millisecValue = 0

        stopwatchHours.innerHTML = "0" + 0
        stopwatchMins.innerHTML = "0" + 0
        stopwatchSeconds.innerHTML = "0" + 0
        stopwatchMilliSecond.innerHTML = "0" + 0
    })
})

// =======================================================================


// ================starting Alarm Clock==================
const AlarmTime = document.getElementById('AlrmTime')
const alarmStartbtn = document.getElementById('Alramstartbtn')
const alarmStopbtn = document.getElementById('Alramstopbtn')
let alarmValue = null
let AlarmTimeOut = null

function GetTheValue(value){
    alarmValue = value
    console.log(alarmValue)
}

function startTheAlarm(){
    console.log("Pending")
    if(alarmValue){
       let CurrentDateTime = new Date()
       let UserTime = new Date(alarmValue)

    if(UserTime > CurrentDateTime){
        let Timer = UserTime.getTime() - CurrentDateTime.getTime()
        AlarmTimeOut = setTimeout(()=>{
            AlarmAudio.play()
            console.log("play")
        },Timer)
    }
}
}

alarmStartbtn.addEventListener('click',startTheAlarm)
alarmStopbtn.addEventListener('click',()=>{
    AlarmAudio.pause()
    clearTimeout(AlarmTimeOut)
})
// ================================= 



// =======================Starting The Timer ===========================
let TimerincreaseBtn = document.getElementById('increse')
let TimerdecreaseBtn  = document.getElementById('decrese')
let TimerShowTheMins = document.getElementById('showmins')
let Timercountdowntime = document.getElementById('countdowntime')
let TimerStartButton = document.getElementById('Timerstartbtn')
let TimerStopButton = document.getElementById('Timerstopbtn')
let Timercount = 0
let TimerInterval;

function IncreasingElM(){
    Timercount ++
    TimerShowTheMins.innerHTML = Timercount

    if(Timercount > 59){
        Timercount = 0
        TimerShowTheMins.innerHTML = "0"

        TimerMassage.classList.add('show')
        TimerMassage.innerHTML = "Sorry 😢 You Can't Set The Timer Up To 59 😓"
        setTimeout(()=>{
            TimerMassage.classList.remove('show')
            TimerMassage.innerHTML = " "
        },2000)
    } 
}

function DecreasingElM(){
    Timercount --
    TimerShowTheMins.innerHTML = Timercount

    if(Timercount < 0){
        Timercount = 0
        TimerShowTheMins.innerHTML = "0"
    }
}
TimerincreaseBtn.addEventListener('click',IncreasingElM)
TimerdecreaseBtn.addEventListener('click',DecreasingElM)


function SetTimer(){
    console.log("timer set")
    TimerValue = Timercount

    if(TimerValue > 0){
        Timercountdowntime.innerHTML = `0${TimerValue}`
    }
    if(TimerValue > 9){
        Timercountdowntime.innerHTML = `${TimerValue}`
    }

    let currentTimerTime = new Date()
    let TimerTime = new Date(currentTimerTime.getTime() + TimerValue * 1000 * 60)
    
    CalculateTimerTime(Timercount * 60)

    TimerInterval = setInterval(()=>{
        let secondReming = Math.round((TimerTime - new Date()) /1000)
        if(secondReming >=0){
            CalculateTimerTime(secondReming)
        }
        else{
            clearInterval(TimerInterval)
            Timercount = 0
            AlarmAudio.play()
            Timercountdowntime.innerHTML = "00"
        }
    },1000)
}


function CalculateTimerTime(secondReming){
    let TimerMins = parseInt(secondReming / 60)
    let TimeSecs = secondReming - TimerMins * 60
    Timercountdowntime.innerHTML = addnum(TimerMins)+":" +addnum(TimeSecs)
}
 


function addnum(num){
    return num < 10 ? "0" + num : num 
}

TimerStartButton.addEventListener('click',SetTimer)
TimerStopButton.addEventListener('click',()=>{
    clearInterval(TimerInterval)
    AlarmAudio.pause()
})
// =======================================================================




// ==================Adding the DarkMode ===================
const DarkModeButton = document.getElementById('darkMode')
const LightModeButton = document.getElementById('LightMode')


DarkModeButton.addEventListener('click',()=>{
    DarkModeButton.style.display = "none"
    LightModeButton.style.display = "block"

    document.body.classList.toggle("darkmode");
})

LightModeButton.addEventListener('click',()=>{
    DarkModeButton.style.display = "block"
    LightModeButton.style.display = "none"

    document.body.classList.remove("darkmode");

})

// ===========================================================