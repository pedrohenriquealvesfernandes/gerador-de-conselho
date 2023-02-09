const fetchAdvice = async() => { 
    const res = await fetch ('https://api.adviceslip.com/advice')
    const data = await res.json()

    console.log(data)
    document.getElementById('titulo').innerHTML = `Advice # ${data.slip.id}`
    document.getElementById('texto').innerHTML = `"${data.slip.advice}"`
}

fetchAdvice()