import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-module-button',
    templateUrl: './module-button.component.html',
    styleUrls: ['./module-button.component.css']
})
export class ModuleButtonComponent {
    @Input() description: string = "";
    @Input() icon: string = "";
    @Input() title: string = "";    
}
