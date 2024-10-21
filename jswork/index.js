// console.log("Hello World!");
// var a=12;
// console.log("a=",a);
// if(a>10)
// {
//     a=30;
//     console.log("Hi",a);
// }
// let a=123;
// console.log(a);
// console.log("Hellojs");

// console.dir(document);
// const div=document.getElementsByClassName("parent");
// console.log(div);
// // div[0].innerText="Abes Engineering College";
// div[0].innerHTML="<h2 style=color:red>ABES EC</h2>";
// const h1=document.createElement("h1");
// h1.innerText="Element is created by DOM Function";
// h1.style.backgroundColor="red"; 
// h1.style.color="yellow";
// div[0].appendChild(h1);
// console.log(h1);
// const img=document.createElement('img');
// img.src="../images/images.jpeg";
// div[0].appendChild(img);
// console.log(img);n
// const button=document.getElementById("btn");
// console.log(button);
// const display=document.getElementById("disp");
// console.log(display);
// // function getdata()
// // {
// //     console.log("calling get data function");
// //     document.write("Hello again");
// //     display.innerHTML="<h3 style=color:red>welcome to cse dept </h3>";

// // }
// // getdata=()=>
// button.addEventListener("click",getdata);
// const promise1=new Promise(
//     (resolve,reject)=>{
//         let a=Math.random()*100;
//         document.write(a);
//         if(a<=70){
//             resolve("value of a is resolved");
//         }else{
//             reject("a is rejected");
//         }
//     }
// );
// promise1.then((msg)=>{console.log(msg)})
// .catch(error=>{console.log(error)})
// .finally(msg=>{console.log("All resources have been closed")})
const response=fetch("https://dummyjson.com/products");
response.then(data=>{
    console.log(data); 
    data.json().then(res=>{
        let list=[];
        for(let i=0;i<5;i++)
        {
            list.push(res.products[i].id,res.products[i].title)
        }
        document.write(list);
    })
})