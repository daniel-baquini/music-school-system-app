import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-small-button',
    templateUrl: './small-button.component.html',
    styleUrls: ['./small-button.component.css']
})
export class SmallButtonComponent {
    
    @Input() label: string = "";
    @Input() type: "primary" | "primary-white" = "primary";

}
