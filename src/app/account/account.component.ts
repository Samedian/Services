import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(private log: LoggingService,private acc:AccountService) {

  }
  onSetTo(status: string) {
    this.acc.updateAccount(this.id,status)
    // this.log.logStatusChange(status)
    this.acc.statusUpdated.emit(status);
  }
}
