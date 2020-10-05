import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    nama = '';
    jurusan = '';
    dataSiswa : any = [];

    constructor() {
        this.getData();
    }
    
    getData() {
        if(localStorage.getItem("data_siswa") !== null){
            this.dataSiswa = JSON.parse(localStorage.getItem("data_siswa"));
        }else{
            this.dataSiswa['item'] = [];
        }
    }

    simpanData() {
        this.dataSiswa['item'].push({
            nama:this.nama,
            jurusan:this.jurusan
        });
        localStorage.clear();
        localStorage.setItem("data_siswa",JSON.stringify({item:this.dataSiswa['item']}));
        this.reset();
    }

    reset() {
        this.nama = '';
        this.jurusan = '';
    }
}
