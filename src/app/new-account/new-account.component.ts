import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]
})
export class NewAccountComponent {
  constructor(private log:LoggingService,private acc:AccountService){
    this.acc.statusUpdated.subscribe(
      (status:string)=>{
        alert('New Status : '+status);
      }
    )
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.acc.addAccount(accountName,accountStatus);
    this.log.logStatusChange(accountStatus);
  }
}
