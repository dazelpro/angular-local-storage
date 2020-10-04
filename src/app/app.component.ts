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
        if(localStorage.getItem("data-siswa") !== null){
            this.dataSiswa = localStorage.getItem("data-siswa");
        }
    }

    simpanData() {
        this.dataSiswa.push({
            nama:this.nama,
            jurusan:this.jurusan
        });
        localStorage.setItem("data-siswa",JSON.stringify(this.dataSiswa));
        this.reset();
    }

    reset() {
        this.nama = '';
        this.jurusan = '';
    }
}
