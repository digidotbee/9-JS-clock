let clock = () => {
    let date = new Date()
    let hours = date.getHours ()
    let min = date.getMinutes ()
    let secs = date.getSeconds ()

    if (hours == 0) hours = 12
    if (hours > 12) {
        hours = hours - 12 
    }
    if (hours < 10) {
        hours = `0${hours}`
    }
    if (min < 10) {
        min = `0${min}`
    }
    if (secs < 10) {secs = `0${secs}`}

    let time = `${hours}:${min}:${secs}`
    document.getElementById("clocky").innerText = (time)
    setInterval(clock, 1000)
}
clock ()

let time = `${hours}:${min}:${secs}`
document.getElementsById("clocky").innerText = (time)
setInterval(clock, 1000)