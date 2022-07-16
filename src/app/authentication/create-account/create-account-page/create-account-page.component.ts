import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-create-account-page',
    templateUrl: './create-account-page.component.html',
    styleUrls: ['./create-account-page.component.css']
})
export class CreateAccountPageComponent {
    
    @Input() instructionsDescription: string = "";
    @Input() instructionsTitle: string = "";
    @Input() returnLink: string = "";
    
}
