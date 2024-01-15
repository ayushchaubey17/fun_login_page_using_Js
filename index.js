

function def(){

let x= document.getElementById("a3");
x.placeholder = " enter your name ";

}
function n(){
    let x= document.getElementById("b1");
    b1.src='a2.jpg';
    b1.style.height="150px";
    b1.style.width="150px";

    }
    function m(){
        let x= document.getElementById("b1");
        b1.src='a6.webp';
        b1.style.height="150px";
        b1.style.width="150px";
    
        }
    


    function t()
    
    {
        let x= document.getElementById("b1");

        let y= document.getElementById("a4");
      if(y.type == "password")
      {
        y.type = "text";
        b1.src='a1.jpeg';
        b1.style.height="150px";
        b1.style.width="150px";
    }

    
        
        else{
              y.type = "password";
              b1.src='a5.jpg';
              b1.style.height="150px";
              b1.style.width="150px";
         
        }
    }
    function r(){
        let y= document.getElementById("a4");
        let x= document.getElementById("a3");
        if(y.value.length < 5)
        {
            alert("write big password");
        }
        if(x.value.length<8)
        {
            alert("write your full name");    
        }
        ru();

    }
    function ru(){
        let y= document.getElementById("a4");
        let x= document.getElementById("a3");
        
     
        if(y.value.length <5 || x.value.length<8 )
        {
            
        let z= document.getElementById("c5");
        z.style.display="none";
        }
        else{
            let z= document.getElementById("c5");
        z.style.display="block";
        z.style.left="140px";
        }
        

        
    }
    function rr()
    {
        alert("you have registerd successfully");
    }