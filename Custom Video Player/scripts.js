
// elements 
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const vol = player.querySelector('.vol')
const speed = player.querySelector('.speed')
const farwardBtn = player.querySelector('.skipFarward')
const  backBtn = player.querySelector('.skipBack')


// fxns

function videoOnOff () { // video on off 
        const onOff = video.paused ? 'play': 'pause'
        video[onOff]()
        // console.log(video[onOff]) 
        const icon = video.paused ? '►' : '| |'
        toggle.textContent = icon;
}


function dragTime (e) { // drag video time
    const setTime = e.offsetX / progress.offsetWidth * video.duration
    video.currentTime = setTime
}


// event listners

video.addEventListener('click', videoOnOff) // on off when click on video
toggle.addEventListener('click', videoOnOff ) // on off button
video.addEventListener('timeupdate', ()=> { // progress bar width / size
    const per = video.currentTime / video.duration * 100
    progressBar.style.flexBasis = `${per}%`
})


farwardBtn.addEventListener('click', () => { // skip farward 25 sec
    // time + 25s
    if (video.currentTime == video.duration) return;
    video.currentTime += 25
})

backBtn.addEventListener('click', ()=>{ // skip backward 10 sec
    if (video.currentTime == 0) return;
    video.currentTime -= 10
})


vol.addEventListener('click', ()=> {
    video['volume'] = vol.value  // vol.name ~ 'volume'
})

speed.addEventListener('click', ()=> {
    video[speed.name] = speed.value  // speed.name ~ 'volume'
})


let mouseOn = false;
progress.addEventListener('click', dragTime) // fire on click
progress.addEventListener('mousemove', ()=> mouseOn && dragTime) // fire only when mouse is clicked 
progress.addEventListener('mousedown',()=> mouseOn = true) // true when mouse clicked
progress.addEventListener('mouseup',()=> mouseOn = false) // false when mouse down


