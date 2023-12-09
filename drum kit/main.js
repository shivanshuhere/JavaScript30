import './style.css'

// instruments
const a = document.querySelector('.box1')
const s = document.querySelector('.box2')
const d = document.querySelector('.box3')
const f = document.querySelector('.box4')
const g = document.querySelector('.box5')
const h = document.querySelector('.box6')
const j = document.querySelector('.box7')
const k = document.querySelector('.box8')
const l = document.querySelector('.box9')

//  sounds 
const audio1 = new Audio('clap.wav')
const audio2 = new Audio('hihat.wav')
const audio3 = new Audio('kick.wav')
const audio4 = new Audio('openhat.wav')
const audio5 = new Audio('boom.wav')
const audio6 = new Audio('ride.wav')
const audio7 = new Audio('snare.wav')
const audio8 = new Audio('tom.wav')
const audio9 = new Audio('tink.wav')

// add class and play sound
document.body.addEventListener('keydown', (e)=>
{
  let btn = e.keyCode;
  switch(btn)
  {
    case 65:
      {
        a.classList.add('playing')
        
        audio1.play() 
        break;
      }
    case 83:
      {
        s.classList.add('playing') 
        
        audio2.play() 
        break;
      }
    case 68:
      {
        d.classList.add('playing')  
        
        audio3.play() 
        break;

      }
    case 70:
      {
        f.classList.add('playing')  
        
        audio4.play() 
        break;

      }
    case 71:
      {
        g.classList.add('playing')  
        
        audio5.play() 
        break;

      }
    case 72:
      {
        h.classList.add('playing') 
        
        audio6.play() 
        break;

      }
    case 74:
      {
        j.classList.add('playing')
        
          audio7.play()
        break;

      }
    case 75:
      {
        k.classList.add('playing') 
        
        audio8.play() 
        break;

      }
    case 76:
      {
        l.classList.add('playing') 
        
        audio9.play() 
        break;

      }
    default: alert('Wrong Input!')
    
  }

})

// remove class
document.body.addEventListener('keyup', (e)=>
{
  let btn = e.keyCode;
  switch(btn)
  {
    case 65:
      {
        a.classList.remove('playing');
        break;
      }
    case 83:
      {
        s.classList.remove('playing');
        
        break;
      }
    case 68:
      {
        d.classList.remove('playing');
        break;

      }
    case 70:
      {
        f.classList.remove('playing');
        break;

      }
    case 71:
      {
        g.classList.remove('playing');
        break;
      }
    case 72:
      {
        h.classList.remove('playing');

        break;

      }
    case 74:
      {
        j.classList.remove('playing'); 
        break;

      }
    case 75:
      {
        k.classList.remove('playing');
        break;

      }
    case 76:
      {
        l.classList.remove('playing');
        break;

      }
    default: alert('Wrong Input!')
    
  }

})
