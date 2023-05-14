import { Component } from '@angular/core';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
	selector: 'app-datepicker-popup',
	standalone: true,
	imports: [NgbDatepickerModule, NgbAlertModule, FormsModule, JsonPipe],
	templateUrl: './app-date-element.component.html'
})
export class AppDateElementComponent {
	model: NgbDateStruct | undefined;
}