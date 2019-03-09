import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { FormControl } from '@angular/forms';

//services
import { GetLoiInfoService } from '../../../../../../services/loi/loi-info/get-loi-info.service';

@Component({
  selector: 'app-director-org-view-letter-of-intent-info',
  templateUrl: './director-org-view-letter-of-intent-info.component.html',
  styleUrls: ['./director-org-view-letter-of-intent-info.component.css']
})
export class DirectorOrgViewLetterOfIntentInfoComponent implements OnInit, OnChanges {

  @Input()
  loi: any;

  loiID: any;

  loiInfo: any;

  loiName: string;

  projectTitle: string;
  purpose: string;
  projectStartDate: any;
  projectEndDate: any;
  amountRequested: string;
  totalProjectCost: string;

  startDate: any;
  endDate: any;

  // MAX_ROWS = 50;
  // MIN_ROWS = 1;

  // purpose_min_rows: number;
  // purpose_max_rows: number;

  resetPurpose: boolean;

  constructor(private getLoiInfoService: GetLoiInfoService) {

    this.defaultValues();

    this.resetPurpose = false;

  }

  ngOnInit() {

    console.log('ngOnInit', this.loi)

    this.loiName = this.loi.name;
    this.loiID = this.loi.id;

    this.getLoiInfo();

  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    this.resetPurpose = true;
    console.log('changes', changes)
    console.log('loi changed: ', this.loi)
    this.loiID = this.loi.id;

    setTimeout(() => { this.resetPurpose = false; }, 100)
    console.log('this.resetPurpose', this.resetPurpose)

    this.getLoiInfo()

  }

  defaultValues() {

    console.log('defaulting values')

    this.projectTitle = ''
    this.purpose = '';

    //Start Date Formatting
    this.projectStartDate = new FormControl(new Date().toISOString())

    console.log('this.projectStartDate', this.projectStartDate.value);

    this.startDate = this.projectStartDate.value;
    this.startDate = this.getFormattedDate(this.startDate);

    //End Date Formatting
    this.projectEndDate = new FormControl(new Date().toISOString())

    console.log('this.projectEndDate', this.projectEndDate.value);

    this.endDate = this.projectEndDate.value;
    this.endDate = this.getFormattedDate(this.endDate);

    console.log('this.endDate', this.endDate)

    this.amountRequested = '';
    this.totalProjectCost = '';

  }

  getLoiInfo() {

    console.log('getting Loi Info', this.loiID)

    this.getLoiInfoService.getLoiInfobyLoiID(this.loiID)
      .subscribe(
        (loiInfo) => {

          console.log('loiInfo', loiInfo);

          if (loiInfo.length > 0) {

            this.loiInfo = loiInfo[0];

            console.log('this.loiInfo.id', this.loiInfo.id)

            this.setFields();
          }
          else {
            //default values

            this.defaultValues();

          }

        })

  }

  setFields() {

    console.log('setting fields')

    if (this.loiInfo) {

      if (this.loiInfo.projectTitle) {
        this.projectTitle = this.loiInfo.projectTitle;
      }

      if (this.loiInfo.purpose) {
        this.purpose = this.loiInfo.purpose;
      }

      if (this.loiInfo.projectStartDate) {
        this.projectStartDate = new FormControl(new Date(this.loiInfo.projectStartDate));

        console.log('this.projectStartDate', this.projectStartDate.value);

        this.startDate = this.projectStartDate.value;
        this.startDate = this.getFormattedDate(this.startDate);

      }

      if (this.loiInfo.projectEndDate) {
        this.projectEndDate = new FormControl(new Date(this.loiInfo.projectEndDate));

        console.log('this.projectEndDate', this.projectEndDate.value);

        this.endDate = this.projectEndDate.value;
        this.endDate = this.getFormattedDate(this.endDate);

      }

      if (this.loiInfo.amountRequested) {
        this.amountRequested = this.loiInfo.amountRequested;
      }

      if (this.loiInfo.totalProjectCost) {
        this.totalProjectCost = this.loiInfo.totalProjectCost;
      }


    }
    else {
      console.log('default values')
    }

  }

  getFormattedDate(date) {

    var d = new Date(date);

    var year = d.getFullYear();

    var month = (1 + d.getMonth()).toString();
    // month = month.length > 1 ? month : '0' + month;
    month = month.length > 1 ? month : month;

    var day = d.getDate().toString();
    //day = day.length > 1 ? day : '0' + day;
    day = day.length > 1 ? day : day;

    return month + '/' + day + '/' + year;
  }

}
