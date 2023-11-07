const persistence = num => {
  let repeat=0
  if(num.toString().length==1){
    repeat=0
  }
  else{
    do{
    num = num.toString().split("").reduce((x,y)=>(Number.parseInt(x)*Number.parseInt(y)))
    repeat++
    }while(num.toString().length!=1)
  }
  return repeat
}
