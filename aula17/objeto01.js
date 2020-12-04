let amigo = {nome:'José', sexo:'M', peso:'84.6', engordar(p=0){
    console.log('Engordou')
    this.peso+=p  
}}

amigo.engordar()
console.log(`${amigo.nome} pesa ${amigo.peso}KG`)
