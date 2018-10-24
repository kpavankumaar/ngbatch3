import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class service {
    constructor(private http:HttpClient){
        
    }
    getData(){
        return this.http.get('./assets/data.json');
    }
}