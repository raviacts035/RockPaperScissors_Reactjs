import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

//Checking New click clicked

const Body=()=>{
    const [userPiK,setUserPik]=useState("")
    const [sysPik,setSysPik]=useState("")
    const [userWon, setUserWon]=useState(false)
    const [drawMatch,setDrawMatch]=useState(false)
    const dList=["Rock","Paper","Scissor"];
    
    function sysgen(){
        let x=dList[Math.floor(Math.random()*3)]
        setSysPik(x)
    }

    function action(input){
        setUserPik(input)
        setDrawMatch(false)
        setUserWon(false)
        sysgen()
        if(userPiK==sysPik){
            setDrawMatch(true)
            console.log()
            return
        }
        setUserWon(whoWon(userPiK,sysPik))
    }

    return(
        <>
            <h2>This is some</h2>
            <div className="space">
                <div className="cardSpace" id="userCard">
                    {userPiK?<Card val={userPiK} />:<div></div>}
                </div>
                <div className="dLine"></div>
                <div className="cardSpace" id="sysCard">
                {sysPik?<Card val={sysPik} />:<div></div>}
                </div>
            </div>
            {userWon?<ResultUser/>:drawMatch?<ResultDraw/>:<ResultSystem/>}
        <div className="btn-grup">
            <button onClick={()=>{action("Rock")}} id="rock">Rock</button>
            <button onClick={()=>{action("Paper")}}id="paper">Paper</button>
            <button onClick={()=>{action("Scissor")}} id="Scissor">Scissor</button>
        </div>
        <h3>Pick Your Choice</h3>
        </>
    )
}


//cards Model
const Card=(props)=>{
    return(
        <>
        <div className="card">
            <h2>{props.val}</h2>
        </div>
        </>
    )
}
const ResultUser=()=>{
    return (<>
    <div className="resultUser">
    <h2>Congractulations, You Won </h2>
    <p>Play Again : </p>
    </div>
    </>)
}
const ResultSystem=()=>{
    return (<>
    <div className="resultUser">
    <h2>Oops, You Lost </h2>
    <p>Try Again</p>
    </div>
    </>)
}
const ResultDraw=()=>{
    return (<>
    <div className="resultUser">
    <h2>Lol, It's a Draw Match</h2>
    <p>No worries</p>
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

export default Body