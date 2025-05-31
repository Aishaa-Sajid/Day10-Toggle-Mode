let btn1=document.querySelector(".lightTheme");
let btn2=document.querySelector(".darkTheme");
console.log(btn1);

let body=document.querySelector("body");
console.log(body);
let mode="light";

// btn1.addEventListener("click",(e)=>{
//  if (mode==="light"){
//     mode="dark";
//     console.log(body.style.backgroundColor="black");
//  }
//  else{
//     mode="Light";
//     console.log(body.style.backgroundColor="white");
//  }

// });

btn1.addEventListener("click",(e)=> {
      if (mode==="light")
    {
       mode="dark";
       body.classList.add("dark");
       console.log("dark");
       body.classList.remove("light");
     }
});
btn2.addEventListener("click",e =>{
        mode="light";
          body.classList.add("light");
          console.log("light");
          body.classList.remove("dark");
})
     


// btn1.addEventListener("click" ,(e)=>{
//     console.log("bxc");
//     console.log("button was clicked - handler1");
//     console.log("Good luck!");
//     console.log(e);
//     console.log(e.type);
// });

 
// let output2=(e)=>{
//     console.log("bxc");
//     console.log("button was clicked - handler2");
//     console.log("Good luck!");
//     console.log(e);
//     console.log(e.type);
// };

// btn1.addEventListener("click",output2);

// btn1.removeEventListener("click",output2);

// btn1.addEventListener("click" ,(e)=>{
//     console.log("bxc");
//     console.log("button was clicked - handler3");
//     console.log("Good luck!");
//     console.log(e);
//     console.log(e.type);
// });


// btn1.onclick=(e)=>{

//     console.log("button was clicked");
//     console.log("Good luck!");
//     console.log(e);
//     console.log(e.type);
// }

// btn1.addEventListener("dblclick",(e)=>{
//     body.style.backgroundColor="pink";
//     console.log("button was double clicked");
//     console,log("bg changed");
//     console.log(e.type);
// })
// btn1.ondblclick=(e)=>{
//     body.style.backgroundColor="pink";
//     console.log("button was double clicked");
//     console,log("bg changed");
//     console.log(e.type);
// }
