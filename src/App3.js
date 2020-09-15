import React, {Component} from 'react';

class Ppn extends Component {
    constructor(props){
        super(props);
            this.state = {
                awal: '',
                ppn: '15',
                diskon: '25',
                hasil: 'Harga Akhir:'
            };

        this.awalChange = this.awalChange.bind(this);
        this.ppnChange = this.ppnChange.bind(this);
        this.diskonChange = this.diskonChange.bind(this);
        }

        awalChange(event){
            this.setState({awal: event.target.value})
        }

        ppnChange(event){
            this.setState({ppn: event.target.value})
        }

        diskonChange(event){
            this.setState({diskon: event.target.value})
        }

        hitung = (event) => {
            let awal = this.state.awal;
            let ppn = this.state.ppn;
            let diskon = this.state.diskon;

            let p = ppn / 100;
            let d = diskon / 100;
            let hasil = (awal*p) + (awal) - (awal*d);

            //output
            this.setState({hasilA: "Rp. " + hasil})

            event.preventDefault();
        }

        render(){
            return(
                <div className="card col-sm-5 mx-auto m-5">
                    <div className="card-header text-center bg-info">
                        <h4>Hitung Harga Akhir</h4>
                    </div>
                    
                    <div className="card-body">
                        <div class="input-group mb-2">
                            <label class="input-group-text">Harga Awal :</label>
                        </div>
                        <input type="number" className="form-control" onChange={this.awalChange}/>
                    </div>
                    <div className="card-body">
                        <div class="input-group mb-2">
                            <label class="input-group-text">PPN :</label>
                        </div>
                        <input type="number" className="form-control" onChange={this.ppnChange}/>
                    </div>
                    <div className="card-body">
                        <div class="input-group mb-2">
                            <label class="input-group-text">Diskon :</label>
                        </div>
                        <input type="number" className="form-control" onChange={this.diskonChange}/>
                    </div>

                    <div className="card-footer">
                        <button className="form-control btn btn-warning text-white bg-dark" onClick={this.hitung}>
                            Hitung
                </button>
                <h4 className="text-center mt-4">Harga Akhir</h4>
        <input className="form-control mb-1 btn btn-danger text-center text-dark font-weight-bold" value={this.state.hasilA} readOnly/>
            </div>
        </div>
            );
        }
    }

export default Ppn;