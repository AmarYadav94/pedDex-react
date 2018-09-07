import React, { Component } from 'react'
import '../style/Create.css'
export default class Convert extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            params: '',
        })
    }

    componentDidMount = () => {
        this.state.params = this.props.match.params;/*--set global params---*/
    }

    render() {
        return (
            <div>
                <div>
                    <div className="row bancorN6 pad">
                        <div className="container c5 clrboth">
                            <div className="full pad w sh br2 clrboth">
                                <div className="ui-lg-2 ico-x1 LHS nopad">
                                    <img src={require('../images/img250/download.png')} />
                                </div>
                                <div className="ui-lg-6 _tokennfo">
                                    <h5 className="mg0 ellip f1 c3">Bancor Network Token (BNT)</h5>
                                    <p className="mg0 f13">
                                        <a className="ellip d" href="">
                                            <i className="fa fa-check-circle"></i>
                                            <span>0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C</span>
                                        </a>
                                    </p>
                                </div>
                                <div className="ui-lg-5 tr">
                                    <button className="bgt cw byRBt f15 u br2 f1">Buy The Relay Token</button>
                                </div>{/*--end of header part--*/}
                                <div className="ui-lg-11 nopad infXo4 f13">
                                    <ul className="pad">
                                        <li>Price: <span>$1.7453</span></li>
                                        <li>Market Cap: <span>$135,355,181.60</span></li>
                                        <li>Liquidity Depth: <span>$583,564.16</span></li>
                                        <li>Relay: <span>0x607108c46bCE4cF6f86698E9B46E3270A734FeFe</span></li>
                                    </ul>
                                </div>{/*-----End of rate,mar,more--*/}
                                <div className="ui-lg-12 full nopad fullContainerSet">
                                    <h5 className="c3 f1">Convert BNT</h5>
                                    <div className="ui-lg-5 nopad ext5Ner">
                                        <label className="full d f13 c7">SPEND</label>
                                        <input className="f1 c3" type="text" placeholder="BNT" />
                                        <time className="full d tr c1 f1">Your Balance: 2000</time>
                                    </div>
                                    <div className="ui-lg-2 tc">
                                        <span className="fa fa-arrows-h pad c"></span>
                                    </div>
                                    <div className="ui-lg-5 nopad ext5Ner">
                                        <label className="full d f13 c7">RECEIVE</label>
                                        <input className="f1 c3" type="text" placeholder="BNT" />
                                        <time className="full d tr c1 f1">Your Balance: 0.00000000</time>
                                    </div>
                                </div>{/*-----End of RECEIVE box--*/}
                                <div className="ui-lg-5 ui-lg-offset-7 extra-info">
                                    <div className="full">
                                        <table className="full f1 c3">
                                            <tbody>
                                                <tr>
                                                    <td>Rate:</td>
                                                    <td className="tr">1 BNT = $0.5730</td>
                                                </tr>
                                                <tr>
                                                    <td>Slippage:</td>
                                                    <td className="tr">0.00%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p className="f1 f13 pad c8">* This transaction will fail if 1 BNT is higher than $1.7802047640614327</p>
                                    </div>
                                </div>{/*-----End of rate box--*/}
                                <div className="ui-lg-12 ad-settings">
                                    <h5 className="pad f2 c c3 mg0">ADVANCED SETTINGS <i className="fa fa-caret-down RHS"></i> </h5>
                                    <div className="ui-lg-12 pad">
                                        <div className="ui-lg-5 nopad ext5Ner">
                                            <label className="full d f13 c7">SPEND</label>
                                            <input className="f1 c3 bgt" type="text" placeholder="BNT" />
                                        </div>
                                        <div className="ui-lg-5 ui-lg-offset-1 nopad ext5Ner">
                                            <label className="full d f13 c7">BNT PRICE CHANGE</label>
                                            <input className="f1 c3 bgt" type="text" placeholder="BNT" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
