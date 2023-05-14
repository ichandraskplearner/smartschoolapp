import { Injectable } from '@angular/core';
import MockReportRecord from './record-data.json';
import { ReportSection } from 'src/app/registration-form/registration.model';
import REPORT_FEILD_MAPPINGS from './record-feild-mappings.json';
import { STR_COMPONET } from './record-constants';

@Injectable({
  providedIn: 'root'
})
export class RecordConverterService {

  FIRST_ELEMENT: number = 0;


  constructor() { }

  getPropertyKeys(): string[] {
    return Object.keys(MockReportRecord.RECORD_DATA);
  }

  public getComponentReportSection(componentCode: string): ReportSection {

    let coreComponent = REPORT_FEILD_MAPPINGS.components.filter((c, i) => c.componentCode === componentCode)[this.FIRST_ELEMENT];
    let coreComponentMappings = REPORT_FEILD_MAPPINGS.rcmappings.filter((m, i) => m.componentId === coreComponent.componentId)[this.FIRST_ELEMENT];

    let componentReportSection: ReportSection = this.getReportSectionObject(coreComponent.componentTitle, true);

    coreComponentMappings.mappings.forEach((mp, i) => {
      componentReportSection.sectionData.push({
        name: mp.controlName,
        amount: 0
      });
    });

    return componentReportSection;
  }

  public getObjectValue<T>(componentCode: string, reportData: any): T | null {

    let componentObjectValue: T | null = null;

    switch (componentCode) {
      case STR_COMPONET:
        componentObjectValue = reportData[STR_COMPONET] as T;
        break;

    }

    return componentObjectValue;
  }

  public fillSectionData(componentCode: string, reportSection: ReportSection, data: any): ReportSection {

    let coreComponent = REPORT_FEILD_MAPPINGS.components.filter((c, i) => c.componentCode === componentCode)[this.FIRST_ELEMENT];
    let coreComponentMappings = REPORT_FEILD_MAPPINGS.rcmappings.filter((m, i) => m.componentId === coreComponent.componentId)[this.FIRST_ELEMENT];

    reportSection.sectionData.forEach((d, i) => {

      let fieldItem = coreComponentMappings.mappings.filter((m, i) => m.controlName === d.name)[this.FIRST_ELEMENT];
      console.log(fieldItem.feildName);
      if (fieldItem != null && fieldItem != undefined) {
        d.amount = parseInt(data[fieldItem.feildName]);
        console.log(data[fieldItem.feildName]);
      }

    });


    return reportSection;
  }

  private getReportSectionObject(title: string, footerIndicator: boolean): ReportSection {
    return {
      sectionName: '',
      showTotalInFooter: false,
      sectionData: []
    };
  }
}
