const input = document.querySelectorAll('input')

input.forEach(input=>{
    input.addEventListener('change', (e)=>{
        document.documentElement()
    })
    
    input.addEventListener('mousemove', (e)=>{
        console.log(e.target.value)
    })
})

