import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opportunity-won-modal',
  templateUrl: './opportunity-won-modal.component.html',
  styleUrls: ['./opportunity-won-modal.component.scss']
})
export class OpportunityWonModalComponent implements OnInit {

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<OpportunityWonModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.close(false);
      this.router.navigate(['/project-form']);
    }, 5000); 
  }

  close(key: boolean) {
    this.dialogRef.close(key);
  }

}
