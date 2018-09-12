import React, { Component } from 'react';
import { scatterLogin, transfer, createRelay, createSmart, buyToken, sellToken, convertToken } from "../utils/methods";
import '../style/Create.css';
import Eos from "eosjs";
var scatter={};
export default class Create4 extends Component {
    constructor(props){
        super(props);
                this.state={
                    from:"",
                     to:"intermediate",
                    token1Address     : this.props.location.state.token1Address,
                    token2Address     : this.props.location.state.token2Address,
                    tokenSymbol       :this.props.location.state.tokenSymbol,
                    numberOfToken     :this.props.location.state.numberOfToken,
                    connector1Deposit :this.props.location.state.connector1Deposit,
                    pegDeposit        :this.props.location.state.pegDeposit,
                    ButtonState : false,
                };
                this.changeButtonState = this.changeButtonState.bind(this);
        }
        changeButtonState(){
            this.setState({
                ButtonState : true,
            })
        }

        componentWillMount() {
            console.log("window",window);
               document.addEventListener('scatterLoaded', scatterExtension => {
                   console.log("window");
                scatter = window.scatter;
                console.log("scatter inside",scatter.identity.accounts["0"]);
                let {name,authority}=scatter.identity.accounts["0"];
                console.log("--",name);
                this.setState({from:name,permission:authority});
                console.log("state-----",this.state)
            });
           }
        handleTransfer=()=> {
            let eosOptions = {
            chainId: "038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca"
          };
        let network = {
            protocol: "http", // Defaults to https
            blockchain: "eos",
            host: "193.93.219.219",
            port: 8888,
            chainId: "038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca"
          };
        console.log("transfer initiated");
        let scatter = window.scatter;
        let eos= scatter.eos(network, Eos, eosOptions)
        console.log("this is the value",this.props.location.state.pegdDisposit)
        eos.transaction(
          {
            actions: [
              {
                account: this.props.location.state.token2Address,
                name: 'transfer',
                authorization: [{
                  actor: this.state.from,
                  //permission: this.state.permission
                  permission: 'active'
                }],
                data: {
                  from: this.state.from,
                  to: this.state.to,
                  quantity: `${this.state.pegDeposit} CET`,
                  memo: "hello"
                  //memo: parseInt(this.compareData[0].gameresult)+ parseInt(this.logIn.controls['pegDiposit'].value)
                }
              }
            ]
          }, (err, result) => {
            if (err) {
              console.log(err)
            } else {
              console.log(result)
            }
          }
        )
    }
    

    createToken(){
        var  total_supply = this.props.location.state.numberOfToken+" "+this.props.location.state.tokenSymbol;
        var  connector1 = this.props.location.state.connector1Deposit;
        var address1 = this.props.location.state.token1Address;
        var address2 = this.props.location.state.token2Address;
        var  connector2 = this.props.location.state.pegDeposit+" "+"CET";
        var tokenSym = this.props.location.state.tokenSymbol;
      createRelay(total_supply,connector1,address1,connector2,address2,tokenSym);   
     }

    render() {
        return (
            <div>
                <div className="row createToken pad">
                    <div className="container c5 nopad">
                        <div className="ui-lg-6 npl">
                            <div className="ui-lg-12 sh w b2 br2 tokenadd nopad">
                                <p className="c5x mg0 pad f3 f16 c3">List a New Token on PEGDEX</p>
                                <div className="pad">
                                    <h5 className="f2 mg0 c3 mgtb">Deposit PEG:USD pegDeposit</h5>
                                    <h1>${this.props.location.state.pegDeposit}</h1>
                                    {/* <button className="c7 br2" onClick={this.handleTransfer}>Transfer</button> */}
                                    <button onClick={()=>{this.handleTransfer(),this.changeButtonState()}} className="c7 br2">Transfer</button>
                                </div>
                                <div className="full pad tr bn5x">
                                <button disabled={!this.state.ButtonState} className="c7 br2" onClick = {() => this.createToken()}>CREATE</button>
                                </div>
                            </div>
                        </div>
                        <div className="ui-lg-6 npr">
                            <div className="ui-lg-12 sh w br2 nopad">
                                <p className="f15 pad c3">Listing a token on PegDex is easy. You can use this form to generate a new relay between your token and the PEG:USD stabletoken. Once you have created a relay it will automatically be listed on PegDex. You will receive the entire initial supply of relay tokens, and they can be sold at any time to pull out your deposit amounts. By owning relay token(s) you will also earn fees whenever people buy or sell through the relay on PegDex. All new listings must be funded with a minimum of 20,000 PEG:USD Tokens.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
