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

//function make car to generate a class of car
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
//data base of cars 
var A_CLASS=makecare('A-CLASS',"mercades","black",80,30,30,"travel")
var C_CLASS=makecare('C_CLASS',"mercedes",'blue',60,20,45,"normal")
var E_CLASS=makecare("E-CLASS","mercedes","red",70,22,25,"formal")

var  CAYENNE=makecare(" CAYENNE","Porshe","red",40,6,70,"popular")
var Panamera=makecare('PANAMERA','Porshe',"white",25,4,78,"popular")
var MACAN=makecare(" MACAN","Porshe","black",45,8,50,"normal")

var BMW3=makecare("BMW3","BMW","blue",90,30,20,"sport")
var X7=makecare("X7","BMW","red",98,32,15,"sport") 
var X6=makecare("X6","BMW","white",88,25,51,"travel")

var S5=makecare("S5","Audi","white",88,25,55,"normal")
var Q7=makecare("Q7","Audi","black",60,30,33,"travel")
var Q4=makecare("Q4","Audi","black",45,20,38,"normal")
 
var mercades=[A_CLASS,C_CLASS,E_CLASS]
var Porshe=[CAYENNE,Panamera,MACAN]
var BMV=[BMW3,X7,X6]
var audi=[S5,Q7,Q4]

var catalogue=[mercades,Porshe,BMV,audi]
function makeagency(name){
    var agency={}
    agency.name=name
    agency.catalogue=catalogue
    agency.bestsale=bestsale
    agency.power=power
    agency.color=color 
    /*agency.display=display*/
    return agency
}
/*function displayobject(obj,query){
  if(Object.keys(obj).includes(query)){
    return obj.query
  }
  return false 

}
function displayarrofobj(arr,query){
  var rslt=map(arr,function(elm,i){
    return displayobject(elm,query)
  })
  return 
}*/

var bestsale=function(){
var arr=[]
    var rslt=map(this.catalogue,function(elm){
         return filter(elm,function(obj){
            return obj["sale"]>60
    }) 
    })
    var best=filter(rslt,function(elm,i){
        return elm.length>0
    })
return arr=best[0]
    
}

var power=function(){
  var arr=[]
    var rslt=map(this.catalogue,function(elm,i){
        return filter(elm,function(obj,i){
            return obj["power"]>=28
        })           
}) 
var pow= filter(rslt,function(elm){
    return elm.length>0
})
 arr=[pow[0][0],pow[1][0],pow[1][1],pow[2][0]]
 return arr
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
/*var display=function(){
 var rslt =map(this.power,function(elm,i){
    return map(elm,function(obj,key){
         obj["power"]
    })
  })
  return rslt
}*/


var carnation=makeagency("CarNation")


//used for the select bar , 
function redirect() {
  var selectBox = document.getElementById("format");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  window.location.href = selectedValue;
}

//jquery part

$(document).ready(function(){

$('#best').click(function(){
  var rslt=""
  for(var i=0 ;i<carnation.bestsale().length;i++){
  
   rslt+=$('#hello').append(`<p style="color:#BE2D0F">${carnation.bestsale()[i]["name"]}</p>`)
  }
  return rslt 
 
})

$('#power').click(function(){
  var rslt=""
  for(var i=0;i<carnation.power().length;i++){
    rslt+=$('#hey').append(`<p style="color:#BE2D0F">${carnation.power()[0]["name"]}</p>`)
  }
  return rslt 
})


$("col").click(function(){
  show(carnation.color("black"))
})

}) 

          
    
    

