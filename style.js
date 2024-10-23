let n1=0
let n2=0
let n3=0

function mediaValores(n1,n2,n3){

   
    let media=(n1+n2+n3)/3

    return media

}

n1= Number(prompt("Digite a primeira nota"))
n2= Number( prompt("Digite a segunda nota"))
n3= Number (prompt("Digite a terceira nota"))

console.log(mediaValores(n1,n2,n3))

