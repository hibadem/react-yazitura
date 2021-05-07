import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      flips:[]
    };
  }
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    const side  = Math.random() < 0.5 ? "yazi" : "tura";
    const flips = [...this.state.flips,side];
    this.setState({flips,flipping:true});
    
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
    
  };
  
  render() {
    const {flips,flipping} = this.state;
    const yazilar = flips.filter(side => side === "yazi").length;
    const turalar = flips.filter(side => side === "tura").length;
    return (
      <div className="CoinFlipper">
        
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={flips[flips.length-1]} flipping={flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {flips.length}</strong>
          atıştan
          <strong> {turalar} </strong> tura
          <strong> {yazilar} </strong>
           yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
