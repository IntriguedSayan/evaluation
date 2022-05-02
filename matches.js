// write js code here corresponding to matches.html


var mData=JSON.parse(localStorage.getItem("schedule"))

var FavArr=JSON.parse(localStorage.getItem("favourites")) || []

var selected= document.querySelector("#filterVenue")
selected.addEventListener("change",function(){


        if(selected.value=="none")
          {
              displayMdata(mData)
          }
        else
        {
          var filterd=  mData.filter(function(elem){

                return elem.area==selected.value



            })
        
        displayMdata(filterd)
        
        }  



})

displayMdata(mData)

function displayMdata(mData){

    document.querySelector("tbody").innerHTML=""

mData.forEach(function(elem) {

    

    var TR=document.createElement("tr")

    var numC=document.createElement("td")
    numC.innerText=elem.num

    var teamA=document.createElement("td")
    teamA.innerText=elem.AT
    
    var teamB=document.createElement("td")
    teamB.innerText=elem.BT

    var mDate=document.createElement("td")
    mDate.innerText=elem.DATE

    var place=document.createElement("td")
    place.innerText=elem.area

    var fav=document.createElement("td")
    fav.innerText="Add as Favourites"
    fav.style.color="green"
    fav.style.cursor="pointer"
    fav.addEventListener("click",function(){

        addToFav(elem)

    })

    TR.append(numC,teamA,teamB,mDate,place,fav)
    document.querySelector("tbody").append(TR)


});

}


function addToFav(elem){

    FavArr.push(elem)
    console.log(FavArr)
    localStorage.setItem("favourites",JSON.stringify(FavArr))
    

}