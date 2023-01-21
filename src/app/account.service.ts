import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    statusUpdated = new EventEmitter<string>();

    constructor(private log:LoggingService){};
    
    addAccount(accountName: string, accountStatus: string) {
        this.accounts.push({ name: accountName, status: accountStatus });
        this.log.logStatusChange(accountStatus);
    }
    updateAccount(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.log.logStatusChange(newStatus);
    }
}