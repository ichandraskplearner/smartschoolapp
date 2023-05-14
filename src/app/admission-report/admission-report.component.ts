import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdmissionDetails, FeeDetails } from '../common-models.model';
import { AppDateElementComponent } from '../common/app-date-element/app-date-element.component';



@Component({
  selector: 'app-admission-report',
  templateUrl: './admission-report.component.html',
  styleUrls: ['./admission-report.component.scss']
})
export class AdmissionReportComponent  {
 
  @Input()
  admissionDetails: AdmissionDetails | undefined;

  
  public commit(): void {
    console.log('');
  }


}
