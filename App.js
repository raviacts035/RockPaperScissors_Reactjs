import React, { useEffect, useState } from "react";

//Checking New click clicked
const Paper=require("./assets/Paper.jpg")
const Rock=require("./assets/Rock.jpg")
const Scissor=require("./assets/Scissor.jpg")


const Body=()=>{
    const [userPiK,setUserPik]=useState(null)
    const [sysPik,setSysPik]=useState(null)
    const [userWon, setUserWon]=useState(false)
    const [drawMatch,setDrawMatch]=useState(false)
    const dList=["Rock","Paper","Scissor"];
    const [userPoint,setUserPoints]=useState(0)
    const [sysPoint,setSysPoints]=useState(0)

    
    function sysgen(){
        let x=dList[Math.floor(Math.random()*3)]
        setSysPik(x)
    }

    function action(input){
        setUserPik(input)
        setDrawMatch(false)
        setUserWon(false)
        setTimeout(sysgen(),6000);
        //Draw Match
        if(userPiK==sysPik){
            setDrawMatch(true)
            console.log()
            return
        }
        let x=whoWon(userPiK,sysPik)
        setUserWon(whoWon(userPiK,sysPik))
        if(x) setUserPoints(userPoint+1)
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
                {/* <div className="dLine"><img src={require("./assets/umpire.jpg")}/></div> */}
            {(userWon)?<ResultUser/>:drawMatch?<ResultDraw/>:<ResultSystem/>}
                <div className="cardSpace" id="sysCard">
                <div>
                    <h2>System</h2>
                    <span>Points : {sysPoint}</span>
                </div>
                <img src={cardPick(sysPik)}/>
                </div>
            </div>
        {/* <hr></hr> */}
        <div className="btn-grup">
            <button onClick={()=>{action("Rock")}} id="rock"><img src={require("./assets/rock_btn.jpg")}/></button>
            <button onClick={()=>{action("Paper")}}id="paper"><img src={require("./assets/paper_btn.jpg")}/></button>
            <button onClick={()=>{action("Scissor")}} id="Scissor"><img src={require("./assets/Scissor_btn.jpg")}/></button>
        </div>
            <div>Click on Your Choice</div>
        </>
    )
}


//cards Model
const Card=(props)=>{
    let url="./assets/"+props.val+".jpg"
    
    return(
        <>
        <div className="card">
            <h2>{props.val}</h2>
            <img src="assets/Roc.jpg"/>
        </div>
        </>
    )
}
const ResultUser=()=>{
    return (<>
    <div className="resultUser">
    <h2>You Won : {`)`}</h2>
    </div>
    </>)
}
const ResultSystem=()=>{
    return (<>
    <div className="resultUser">
    <h2>Oops, You Lost </h2>
    </div>
    </>)
}
const ResultDraw=()=>{
    return (<>
    <div className="resultUser">
    <h2>Draw Match</h2>
    </div>
    </>)
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

export default Body