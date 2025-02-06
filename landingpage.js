let first=document.getElementById('put')
let second=document.getElementById('second')
let third=document.getElementById('Research')
let fourth=document.getElementById('safety')
let fifth=document.getElementById('api')
let sixth=document.getElementById('business')
let seventh=document.getElementById('stories')
let eight=document.getElementById('company')
let ninth=document.getElementById('news')
let tenth=document.getElementById('precaution')
let score=0
function sum(){
    if(score%2!=0){
        second.style.visibility="visible"
          third.style.visibility="hidden"
            fourth.style.visibility="hidden"
                 fifth.style.visibility="hidden"
                    sixth.style.visibility="hidden"
                       seventh.style.visibility="hidden"
                          eight.style.visibility="hidden"   
                          ninth.style.visibility="hidden"
                            tenth.style.visibility="hidden"
        first.style.width="0px"
    }
    else{
        second.style.visibility="hidden"
        third.style.visibility="visible"
        fourth.style.visibility="visible"
             fifth.style.visibility="visible"
                sixth.style.visibility="visible"
                   seventh.style.visibility="visible"
                      eight.style.visibility="visible"   
                      ninth.style.visibility="visible"
                        tenth.style.visibility="visible"
        first.style.width="550px"
    }
    score++;
}
const months = [
    "January", "February", "March", "April", 
    "May", "June", "July", "August", 
    "September", "October", "November", "December"
  ];
let dates=document.getElementById('date')
let date=new Date()
let day=date.getDay()
let year=date.getFullYear()
let month=months[date.getMonth()]
dates.innerText=`${month} ${day}, ${year}`
