import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdmissionDetails } from '../common-models.model';
import { RecordConverterService } from 'src/mapper/record-converter.service';
import { ReportRecord, ServiceTypeRequest } from './registration.model';
import { STR_COMPONET } from 'src/mapper/record-constants';
import MockReportRecord from '../../mapper/record-data.json';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  admissionInitialInfo: AdmissionDetails;

  constructor(
    private modalService: NgbModal,
    private recordCoverterService: RecordConverterService) {
    this.admissionInitialInfo = {
      gender: 'male',
      fullname: 'chandra',
      fees: [
        {
          name: 'Donation',
          amount: 3000
        },
        {
          name: 'Join Fee',
          amount: 200
        },        
        {
          name: 'Annual Fee',
          amount: 2000
        },        
        {
          name: 'Books Fee',
          amount: 200
        },        
        {
          name: 'Other Fee',
          amount: 200
        }
      ]
    }
  }


  ngOnInit(): void {

    let serviceTypeRequestObject = this.recordCoverterService.getObjectValue<ServiceTypeRequest>(STR_COMPONET, MockReportRecord.RECORD_DATA);    
    console.log(serviceTypeRequestObject);
    let serviceTypeRequestSection = this.recordCoverterService.getComponentReportSection(STR_COMPONET);
    console.log(serviceTypeRequestSection);
    console.log('**** AFTER FILLING DATA ****');
    console.log(this.recordCoverterService.fillSectionData(STR_COMPONET, serviceTypeRequestSection, serviceTypeRequestObject));
    
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
