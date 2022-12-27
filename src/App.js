import './App.css';
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { GiAbstract015 } from 'react-icons/gi';
import abi from "./abi/abi.json";
import data from "./data/data.json";



/*function App() {
  const [state, setState] = useState({
      num1: 1,
      num2: 2,
      response: "",
      score: 0, 
      incorrect: false   
  });


     function updateKey(event) {
      // this checks if the enter key was pressed
      if (state.response.length > 0) {
      if(event.key === "Enter") {
        const answer = parseInt(state.response)  //  parseint convert string to number
        if (state.num1 + state.num2 === answer) {
           setState({
            ...state,
            num1: Math.ceil(Math.random() * 10),
            num2: Math.ceil(Math.random() * 10),
            score: state.score + 1,
            response: "",
            incorrect: false
           })
        }
        else {
          setState({
            ...state,
            score: state.score - 1,
            response: "",
            incorrect: true
          })
        }
      }
    } 
    else {

    }  
     }

     function updateResponse(event) {
      setState({
        // ...state (spread operator) means all the state i.e num1 & num2 should remain the sama, only response to change
        ...state,
        response: event.target.value
      });

    
  }

  if(state.score === 10){
    return ( 
    <div id="won"> You won!</div>
    )
  }
  // value = {state.response}
  return(
    <div id="App">
    <div id="problem" className={state.incorrect ? "incorrect" : ""}>{state.num1} + {state.num2}</div>
    <input autoFocus={true} onKeyPress={updateKey} onChange={updateResponse} value={state.response} />
    <div>Score: {state.score}</div>
    </div>
  );
}
*/









/*function App() {
  //let num = 0;
  //num++;
  const [num, setNum] = useState(0);
   
    useEffect( () => {
     setInterval( () => {
      setNum(prevNum => prevNum + 1);
    }, 1000
    );
    }, []
      
    );
    
  
  return (
    <div>
    <h1>{num}</h1>
    
    
</div>
  );
}*/































function App() {
  const [account, SetAccount] = useState("");

  const [provider, setProvider] = useState(null);

  const [nfts, setNfts] = useState(data);

  // this async function is to check for NFT balance 
  const balance = async () => {
    const contract = new ethers.Contract("0x75fe16FFdA57C5Ec022dF26FC2F6972AcFA871A6", abi, provider);
    const tempBalance = await contract.balanceOf (
    "0x9A96F1F7Fc3BF07b114D766a2958Ad37b2B382f3"
    );
    console.log(tempBalance.toString());
  }

  //this async function is to check for metamask and connect to wallet
  const initConnection = async () => {
    if(typeof window.ethereum !== "undefined"){
      console.log("you have metamask");
     const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
     });
     const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
     setProvider(tempProvider);
     SetAccount(accounts[0]);
    }
    else {
      console.log('please install metamask');
      return (
        <div>Install metamask</div>
      )
    }
  };
// allows code to load automtically
  useEffect(() => {
    initConnection();
    
  }, []);

  return (
   
    <div className="page">
      <div className="header">
        <img src={require('./asset/logo192.png')} className="artIcon" />
        <p>
          11/25
          <span>
          <GiAbstract015 style={{marginLeft: "5px"}}/>
          </span>
          </p>
        {account === "" ? (
      <button onClick={initConnection} className="button">connect wallet</button>
         ) : (
    <p>...{account.substring( account.length - 50)} </p> )}
    </div>

    
    <div className="main">
      {nfts.list.map((nft, index) => {
        return ( 
        <div key={index} className="card">
          <div style={{ position: 'relative'}}>
            <a href={nft.link}>
            <img src={require('./asset/opensea-logo.png')} className="logo"/>
            </a>
          </div>
          <img src={require(`./asset/${nft.id}.${nft.type}`)} className="nftArt"/>
          <p className="nftTest">{nft.name}</p>
        </div>
        );
      })}
    </div>
    </div>
    
    
    
  );
}


export default App;
