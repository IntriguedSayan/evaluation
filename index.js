// write js code here corresponding to index.html
// You should add submit event on the form



document.querySelector("#masaiForm").addEventListener("submit",formFun)


var mArr=JSON.parse(localStorage.getItem("schedule")) || []

function formFun(){

    event.preventDefault()

    var maNum=document.querySelector("#matchNum")
    var at=document.querySelector("#teamA")
    var bt=document.querySelector("#teamB")
    var dat=document.querySelector("#date")
    var place=document.querySelector("#venue")

    var mObj={

        num:maNum.value,
        AT:at.value,
        BT:bt.value,
        DATE:dat.value,
        area:place.value
    }

    mArr.push(mObj)
    console.log(mArr)
    localStorage.setItem("schedule",JSON.stringify(mArr))
}