let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msgContainer=document.querySelector(".msg-container");
let newbtn=document.querySelector(".new-btn");
let msg=document.querySelector(".msg");
let turnO=true;
let btnclick=0;
const winpatt=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        if(turnO==true){//player o
            box.setAttribute("class","newbox");
            box.innerText="O";
            turnO=false;
        }
        else{//player x
            box.setAttribute("class","box");
            box.innerText="X";
            turnO=true;
        }
    console.log("clicked");
        box.disabled=true;
        checkwinner();
        btnclick=btnclick+1;
        console.log(btnclick);
        if(btnclick==9){
            msg.innerText="no winner";
            msgContainer.classList.remove("hide");
            disablebox();
        }
    });
});
const resetgame=()=>{
    turnO=true;
    enablebox();
    msgContainer.classList.add("hide");
    btnclick=0;

}
const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showwinner=(posval1)=>{
    msg.innerText=`Congratulations! the winner is ${posval1}`;
    msgContainer.classList.remove("hide");
    disablebox();
};
const checkwinner=()=>{
    for(let pat of winpatt){
        let posval1=boxes[pat[0]].innerText;
        let posval2=boxes[pat[1]].innerText;
        let posval3=boxes[pat[2]].innerText;
        if(posval1!="" && posval2!="" && posval3!=""){
            if(posval1==posval2 && posval2==posval3){
                console.log("winner",posval1);
                showwinner(posval1);
            }
        }
    }
};
reset.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);