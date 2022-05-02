// write js code here corresponding to favourites.html

var favData=JSON.parse(localStorage.getItem("favourites"))



displayFdata(favData)

function displayFdata(favData){

    favData.forEach(function(elem,index){

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

        var Del=document.createElement("td")
        Del.innerText="Delete"
        Del.style.color="red"
        Del.style.cursor="pointer"
        Del.addEventListener("click",function(){


            DelFun(elem,index)


        
    });

    TR.append(numC,teamA,teamB,mDate,place,Del)
    document.querySelector("tbody").append(TR)

})

}

function DelFun(elem,index){

   favData.splice(index,1)
   localStorage.setItem("favourites",JSON.stringify(favData))
  
   window.location.reload()
   
}