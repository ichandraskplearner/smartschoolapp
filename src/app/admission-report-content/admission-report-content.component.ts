import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { AdmissionDetails, FeeDetails } from '../common-models.model';



interface AdmissionFormGroup {
  gender: FormControl<string | null>,
  fullname: FormControl<string | null>,
  fees: FormArray,
  feetotal: FormControl<number | null>
}

interface FeeFormGroup {
  name: FormControl<string | null>,
  amount: FormControl<number | null>,
}

@Component({
  selector: 'app-admission-report-content',
  templateUrl: './admission-report-content.component.html',
  styleUrls: ['./admission-report-content.component.scss']
})
export class AdmissionReportContentComponent implements OnChanges{

  @Input()
  admissionDetails: AdmissionDetails | undefined;

  admissionForm: FormGroup;

  constructor(
    private fb: FormBuilder) {
    this.admissionDetails = {
      gender: '',
      fullname: '',
      fees: []
    };
    this.admissionForm = this.defaultAdimissionForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    let currentData = changes['admissionDetails'].currentValue as AdmissionDetails;
    console.log(currentData);
    if (currentData != null && currentData != undefined) {
      this.fillAdmissionForm(currentData);
    }
  }
  
  private defaultAdimissionForm(): FormGroup<AdmissionFormGroup> {
    return this.fb.group<AdmissionFormGroup>({
      gender: new FormControl(''),
      fullname: new FormControl(''),      
      fees: this.fb.array<FeeFormGroup>([]),
      feetotal: new FormControl(0)
    });
  }
  
  private fillAdmissionForm(data: AdmissionDetails) {

    this.admissionForm.get('fullname')?.setValue(data.fullname);
    this.admissionForm.get('gender')?.setValue(data.gender);
    this.fillFeesArray(data.fees);

    console.log(this.feeItems);
  }

  private fillFeesArray(data: FeeDetails[]) {

    data.forEach((v, i) => {
      this.feeItems.push(
        this.fb.group<FeeFormGroup>({
          name: new FormControl(v.name),
          amount: new FormControl(v.amount)
        })
      );
    });

    this.calculateTotal();

  }

  public calculateTotal() : void {
    let totalAmount: number = 0;
    this.feeItems.controls.forEach((feeControl, i) => {
      totalAmount = totalAmount + parseInt(feeControl.value.amount);
    });

    this.admissionForm.get('feetotal')?.setValue(totalAmount);
  }

  get feeItems(): FormArray {
    return this.admissionForm.controls['fees'] as FormArray;
  }

  public commit(): void {
    console.log(this.admissionForm.getRawValue());
  }
}
