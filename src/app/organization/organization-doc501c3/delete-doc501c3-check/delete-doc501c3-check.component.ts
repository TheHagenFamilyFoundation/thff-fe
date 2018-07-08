import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-doc501c3-check',
  templateUrl: './delete-doc501c3-check.component.html',
  styleUrls: ['./delete-doc501c3-check.component.css']
})
export class DeleteDoc501c3CheckComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDoc501c3CheckComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, ) { }

  ngOnInit() {
  }

  delete501c3() {

    console.log('delete 510c3')

    var body = {
      delete: true
    }

    this.dialogRef.close(body);

  }

  cancel() {

    console.log('cancel the delete')

  }

}
