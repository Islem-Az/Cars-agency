function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, i) {
      if (predicate(element, i)) {
        acc.push(element)
      }
    })
    return acc;
  }
  
  function map(array, func) {
    var acc = []
    each(array, function (element, i) {
      acc.push(func(element, i))
    })
    return acc
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0]
      array = array.slice(1)
    }
    each(array, function (element, i) {
      acc = f(acc, element, i)
    })
    return acc
  }


function makecare(name,model,color,price,power,sale,type,url){
    var car={}
    car.name=name
    car.model=model
    car.color=color
    car.price=price
    car.power=power
    car.sale=sale
    car.type=type
    car.pic=url
    return car
}
/*price on 1000$
 power on CV unit
 sale on % unit 
  */

var classe_G=makecare('G-Class',"mercades","black",80,30,30,"travel")
var class_C=makecare('Class-C',"mercedes",'blue',60,20,45,"normal")
var class_s=makecare("Class-S","mercedes","red",70,22,25,"formal")

var golf=makecare("Golf 7","Volswagen","red",40,6,70,"popular")
var polo=makecare('Polo8 8','Volswagen',"white",25,4,78,"popular")
var passat=makecare("Passat","Volswagen","black",45,8,50,"normal")

var i4=makecare("I4","BMW","blue",90,30,20,"sport")
var i5=makecare("I5","BMW","red",98,32,15,"sport") 
var x5=makecare("X5","BMW","white",88,25,51,"travel")

var a6=makecare("A6","Audi","white",88,25,55,"normal")
var q6=makecare("Q6","Audi","black",60,30,33,"travel")
var q4=makecare("Q4","Audi","black",45,20,38,"normal")
 
var mercades=[class_C,class_s,classe_G]
var WV=[golf,polo,passat]
var BMV=[i4,i5,x5]
var audi=[a6,q6,q4]

var catalogue=[mercades,WV,BMV,audi]
function makeagency(name){
    var agency={}
    agency.name=name
    agency.catalogue=catalogue
    agency.bestsale=bestsale
    /*agency.cheapest=cheapest
    agency.expensive=Mostexpensive*/
    agency.power=power
    agency.color=color 
    return agency
}
var bestsale=function(){

    var rslt=map(this.catalogue,function(elm){
         return filter(elm,function(obj){
            console.log(obj)
            return obj["sale"]>60
    }) 
    })
    console.log(rslt)
    var best=filter(rslt,function(elm,i){
        return elm.length>0
    })
return best 
    
}

var power=function(){
    var rslt=map(this.catalogue,function(elm,i){
        return filter(elm,function(obj,i){
            return obj["power"]>=28
        })           
}) 
var pow= filter(rslt,function(elm){
    return elm.length>0
})
return pow
}
var color=function(clr){
    var rslt=map(this.catalogue,function(elm,i){
        return filter(elm,function(obj,i){
            return obj["color"]===clr 
        })
    })
 var col=filter(rslt,function(elm){
    return elm.length>0 
 })
 return col
}

    



//DOM
/*var mrcds=document.getElementById("mrcds").innerText
var vw=document.getElementById("wv").innerText
var bm=document.getElementById("bm").innerText
var audi=document.getElementById("adi").innerText

var mybtn=document.getElementById("btn")*/

function redirect() {
  var selectBox = document.getElementById("format");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  window.location.href = selectedValue;
}

   
          
    
    

