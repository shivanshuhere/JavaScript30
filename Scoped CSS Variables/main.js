const input = document.querySelectorAll('input')

input.forEach(input=>{
    input.addEventListener('change', (e)=>{
        // spacing
        if (e.target.id == 'space')
        {
           document.documentElement.style.setProperty('--spc', `${e.target.value}px`)
        }
        //blur
        if (e.target.id == 'blur')
        {
            document.documentElement.style.setProperty('--blr', `${e.target.value}px`)
        }
        //color
        if (e.target.id == 'color')
        {
            document.documentElement.style.setProperty('--clr', e.target.value)
        }
    })
    
    input.addEventListener('mousemove', (e)=>{
        // spacing
        if (e.target.id == 'space')
        {
           document.documentElement.style.setProperty('--spc', `${e.target.value / 2}px`)
        }
        //blur
        if (e.target.id == 'blur')
        {
            document.documentElement.style.setProperty('--blr', `${e.target.value}px`)
        }
        //color
        if (e.target.id == 'color')
        {
            document.documentElement.style.setProperty('--clr', e.target.value)
        }
    })

})

