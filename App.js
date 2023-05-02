import React, { useEffect, useState } from "react";

//Checking New click clicked
const Paper=require("./assets/Paper.jpg")
const Rock=require("./assets/Rock.jpg")
const Scissor=require("./assets/Scissor.jpg")

const Body=()=>{
    const [userPiK,setUserPik]=useState(null)
    const [sysPik,setSysPik]=useState(null)
    const dList=["Rock","Paper","Scissor"];
    const [userPoint,setUserPoints]=useState(0)
    const [sysPoint,setSysPoints]=useState(0)
    const [message,setMsg]=useState("let's go..")

    function sysgen(){
        let x=dList[Math.floor(Math.random()*3)]
        setSysPik(x)
    }
    //use
    useEffect(()=>{
        if (!userPiK) return
        if(userPiK==sysPik){
            setMsg("Oops, Draw")
            return
        }
        if (whoWon(userPiK,sysPik)) {
            setUserPoints(userPoint+1)
            setMsg("+1 Points to User")
        }
        else{
            setSysPoints(sysPoint+1)
            setMsg("+1 Points to System")
        }
        console.log("useEffect = "+message)
    },[sysPik,userPiK])
    function action(input){
        setUserPik(input)
        sysgen()
    }
    return(
        <>
            <h2 className="wel">Welcome to the Game...</h2>
            <div className="space">
                <div className="cardSpace" id="userCard">
                    <div>
                    <h2>User</h2>
                    <span>Points : {userPoint}</span>
                    </div>
                    <img src={cardPick(userPiK)}/>
                </div> 
                <DialogBox val={message}/>
                <div className="cardSpace" id="sysCard">
                <div>
                    <h2>System</h2>
                    <span>Points : {sysPoint}</span>
                </div>
                <img src={cardPick(sysPik)}/>
                </div>
            </div>
        {(userPoint>=3 || sysPoint>=3)?<GameOver {...{userPoint,sysPoint}}/>:""}
        <div className="btn-grup">
            <button onClick={()=>{action("Rock")}} id="rock"><img src={require("./assets/rock_btn.jpg")}/></button>
            <button onClick={()=>{action("Paper")}}id="paper"><img src={require("./assets/paper_btn.jpg")}/></button>
            <button onClick={()=>{action("Scissor")}} id="Scissor"><img src={require("./assets/Scissor_btn.jpg")}/></button>
        </div>
        </>
    )
}

//cards Model
const DialogBox=(p)=>{
    return (
    <>
    <div className="resultUser"><span>{p.val}</span></div>
    </>)
}

const GameOver=({userPoint,sysPoint})=>{
    let msg=""
    if (userPoint>sysPoint){
        msg="You Won the Game"
    }
    else{
        msg="You LOST the Game"
    }
    return(
        <>
        <div className="card">
            <h2>Game Over!!</h2>
            <h3>{msg}</h3>
            <span>{userPoint+" : "+sysPoint}</span>
            <button id="playAgain" onClick={()=>{
                window.location.reload()
            }}>Play Again</button>
        </div>
        </>
    )
}

// Rock
// Paper
// Scissor
function whoWon(userPiK,sysPik){
    let x=userPiK+sysPik
    if(x=='ScissorPaper' || x=='PaperRock'||x=='RockScissor'){
        return true
    }
    else {
        return false
    }
}

function cardPick(x){
    if (!x){
        return
    }
    if (x=="Rock"){
        return Rock
    }
    else if(x=="Paper"){
        return Paper
    }
    else{
        return Scissor
    }
}

function gameOver(userPoint,sysPoint){
    if(userPoint>=3 || sysPoint>=3){
        return 
    }
}

export default Body