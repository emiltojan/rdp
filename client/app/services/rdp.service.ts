import {Http,Headers} from '@angular/http';
import {Injectable} from '@angular/core'
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
@Injectable()

export class RdpService{
    constructor(private http:Http){
        console.log("Rdp Service Initialized...")
    }
    
    connectRdp(newConnection:any):Observable<any>{
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('/api/rdp',JSON.stringify(newConnection),{headers:headers});
    }
     getDC(){
        return this.http.get('./assets/data.json')
        .map(res=>res.json());      
    }
    
     removeFile(fileName:any):Observable<any>{
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('/api/removeFile',JSON.stringify(fileName),{headers:headers});  
    }
      
}    
      