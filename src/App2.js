import React, {Component} from 'react';

class Cicilan extends Component {
  constructor(props){
    super(props);
    this.state = {
    nominal: '',
    bunga: '',
    periode: '12',
    hasil: 'Cicilan per bulan:'
  };

  this.nominalChange = this.nominalChange.bind(this);
  this.bungaChange = this.bungaChange.bind(this);
  this.periodeChange = this.periodeChange.bind(this);
  }

  nominalChange(event){
    this.setState({nominal: event.target.value})
  }

  bungaChange(event){
    this.setState({bunga: event.target.value})
  }

  periodeChange(event){
    this.setState({periode: event.target.value})
  }

  hitung = (event)  => {
    let nominal = this.state.nominal;
    let bunga = this.state.bunga;
    let periode = this.state.periode;

    let b = bunga / 100;
    let pbulan = nominal / periode; 
    let flower = (pbulan / 100) * 10;
    let hasil = pbulan + flower;

    //output
    this.setState({hasilA: "Rp. " + hasil})

    event.preventDefault();
  }

  render(){
    return(
      <div className="card col-sm-5 mx-auto m-5">
                <div className="card-header text-center bg-warning text-white">
                    <h4>Cicilan Bank</h4>
                </div>
            <div className="card-body">
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <label class="input-group-text" >Nominal : </label>
          </div>
          <input type="number" className="form-control" onChange={this.nominalChange}/>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <label class="input-group-text" >Bunga :  </label>
          </div>
          <label className="input-group-text bg-white form-control" >10 </label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <label class="input-group-text" >Periode : </label>
          </div>
          <select class="custom-select" value={this.state.periode} onChange={this.periodeChange}>
            <option value="12">12 bulan</option>
            <option value="24">2 tahun 24 bulan</option>
            <option value="36">3 tahun 36 bulan</option>
          </select>
        </div>
            </div>
            <div className="card-footer">
              <button className="form-control btn btn-warning text-white bg-dark" onClick={this.hitung}>
                    Hitung
                </button>
                <h4 className="text-center mt-4">Hasil</h4>
        <input className="form-control mb-1 btn btn-danger text-center text-dark font-weight-bold" value={this.state.hasilA} readOnly/>
            </div>
        </div>
    );
  }
}

export default Cicilan;
