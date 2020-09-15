import React, {Component} from 'react';

class Bilangan extends Component {

    state = {
        hasilAkhir: '',
        bahan: {
        pilihan: '',
        konversi: '',
        nilaiAwal: 0    
    }
}
    changeType = (event) => {
        let bahanA = {...this.state.bahan}
        bahanA[event.target.name]= event.target.value
        this.setState({
            bahan: bahanA
        }, () => {
            console.log(this.state.bahan)
        }
        )
    }
    hitungNilai = () => {
        let bahanNew = {...this.state.bahan}
        if(bahanNew.pilihan == 10){
            if(bahanNew.konversi == 10){
                this.setState({
                    hasilAkhir: bahanNew.nilaiAwal
                })
            }else if(bahanNew.konversi == 2){
                let decimal = bahanNew.nilaiAwal*1
                let bin = decimal.toString(2)
                this.setState({
                    hasilAkhir: bin
                })
            }else if(bahanNew.konversi == 8){
                let decimal = bahanNew.nilaiAwal*1
                let oct = decimal.toString(8)
                this.setState({
                    hasilAkhir: oct
                })
            }else if(bahanNew.konversi == 16){
                let decimal = bahanNew.nilaiAwal*1
                let hex = decimal.toString(16).toUpperCase()
                this.setState({
                    hasilAkhir: hex
                })
            }
        }else if (bahanNew.pilihan == 2){
            let bin = bahanNew.nilaiAwal*1
            let dec = parseInt(bin , 2)
            if(bahanNew.konversi == 10){ 
                this.setState({
                    hasilAkhir: dec
                })
            }else if(bahanNew.konversi == 2){
                this.setState({
                    hasilAkhir: bahanNew.nilaiAwal
                })
            }else if(bahanNew.konversi == 8){
                let oct = dec.toString(8)
                this.setState({
                    hasilAkhir: oct
                })
            }else if(bahanNew.konversi == 16){
                let hex = dec.toString(16).toUpperCase()
                this.setState({
                    hasilAkhir: hex
                })
            }
        }else if (bahanNew.pilihan == 8){
            let oct = bahanNew.nilaiAwal*1
            let dec = parseInt(oct , 8)
            if(bahanNew.konversi == 10){ 
                this.setState({
                    hasilAkhir: dec
                })
            }else if(bahanNew.konversi == 2){
                let bin = dec.toString(2)
                this.setState({
                    hasilAkhir: bin
                })
            }else if(bahanNew.konversi == 8){
                let oct = dec.toString(8)
                this.setState({
                    hasilAkhir: oct
                })
            }else if(bahanNew.konversi == 16){
                let hex = dec.toString(16).toUpperCase()
                this.setState({
                    hasilAkhir: hex
                })
            }
        }else if (bahanNew.pilihan == 16){
            let hex = bahanNew.nilaiAwal
            let dec = parseInt(hex , 16)
            if(bahanNew.konversi == 10){ 
                this.setState({
                    hasilAkhir: dec
                })
            }else if(bahanNew.konversi == 2){
                let bin = dec.toString(2)
                this.setState({
                    hasilAkhir: bin
                })
            }else if(bahanNew.konversi == 8){
                this.setState({
                    hasilAkhir: bahanNew.nilaiAwal
                })
            }else if(bahanNew.konversi == 16){
                this.setState({
                    hasilAkhir: bahanNew.nilaiAwal
                })
            }
        }
    }
    render(){
        return(
            <div className="card col-sm-5 mx-auto m-5">
                <div className="card-header text-center bg-danger text-white">
                    <h4>Konversi Bilangan</h4>
                </div>

                <div className="card-body">
                    <div class="input-grup-mb-2">
                        <div class="input-group-prepend">
                            <select className="input-group-text form-control" name="pilihan"  onChange={this.changeType}>
                                <option>Pilih Bilangan </option>
                                <option name="pilihan" value="10">Desimal</option>
                                <option name="pilihan" value="2">Biner</option>
                                <option name="pilihan" value="8">Oktal</option>
                                <option name="pilihan" value="16">Heksadesimal</option>
                            </select>
                            <input name="nilaiAwal" class="form-control" onChange={this.changeType} />
                        </div>
                        <p></p>
                        <div class="form-group">
                        <select className="input-group-text form-control" name="konversi" onChange={this.changeType}>
                                <option>Pilih Konversi </option>
                                <option name="konversi" value="10">Desimal</option>
                                <option name="konversi" value="2">Biner</option>
                                <option name="konversi" value="8">Oktal</option>
                                <option name="konversi" value="16">Heksadesimal</option>
                            </select>
                            </div>
                                    
                <button className="btn btn-danger form-control" onClick={this.hitungNilai}>Hitung</button>
                <hr/>
                <h4 className="text-center mt-4">Hasil</h4>
                <input className="form form-control text-center font-weight-bold" name="hasil" value={this.state.hasilAkhir} disabled />
            </div>
            </div>
            </div>
        );
    }
}
export default Bilangan;