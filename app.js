let string="";
let buttons=document.querySelectorAll(".box");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (e)=>{
        if(e.target.innerText == "="){
            string =eval(string);
            document.querySelector('input').value=string;
        }
         else if(e.target.innerText == "AC"){
            string ="";
            document.querySelector('input').value=string;
         } 
          else if(e.target.innerText == "DEL"){
            string =string.slice(0, -1);
            document.querySelector('input').value=string;
         }
          else if(e.target.innerText == "Ans"){
            string +=string;
            document.querySelector('input').value=string;
         }
         
        else{
            string=string + e.target.innerHTML;
            document.querySelector('input').value=string;
         }
    })
})