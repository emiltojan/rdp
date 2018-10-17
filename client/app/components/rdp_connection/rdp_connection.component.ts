import {Component} from '@angular/core';
import {RdpService} from '../../services/rdp.service';
import {Rdp} from '../../rdp';
import {DC_DATA} from '../../dc_data';

@Component({
     moduleId:module.id,
    selector:'rdp-connection',
    templateUrl:'rdp-connection.component.html',
    providers:[RdpService]
})

export class RdpConnectionComponent{
     rdp:Rdp[]=[];
     userid:string;
     country_code:string;
     node:string;
     dc:string;
     dc_data:DC_DATA[];
     dcs:any[]; 
     fileName:any;
     constructor(private rdpService:RdpService){
         this.rdpService.getDC().subscribe(dc_data => {
            this.dc_data = dc_data;
        });
     }
     
  countryDropDownChanged(val: any) {
    console.log(val);  
    this.dcs = this.dc_data.find(cc => cc.country_code == val).dc; 
  }   
  
  connectRdp(event:any){
      event.preventDefault();
    
    var newConnection={
        userid:this.userid,
        dc:this.dc,
        node:this.node,
        country_code:this.country_code
    }
   
    // console.log(newConnection);
    console.log(this.rdpService.connectRdp(newConnection));
    this.rdpService.connectRdp(newConnection).subscribe(
     (response) => {
         this.fileName = {fileName:response._body};
         },
         (err) =>{console.log(err)},
         () =>{
             this.removeFile(this.fileName);} 
            );
            
            
            
      
    this.userid='';
    this.country_code='';
    this.node='';
    this.dc='';
     
    console.log("End of function");
  }
  removeFile(fileName:any){
      console.log("entering function"+fileName);
          this.rdpService.removeFile(fileName).subscribe(
        (response)=>{    
        console.log(response);        
    });
  }
}