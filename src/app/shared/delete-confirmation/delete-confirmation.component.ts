import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ShareService } from 'src/app/core/services/share.service';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {

  constructor(
    private shareService: ShareService,  
    @Inject(MAT_DIALOG_DATA) public data: any, public _snackBar:MatSnackBar  ) { 
  }

  ngOnInit(): void {
  }


  delete(){
    this.shareService.delete(this.data.id, this.data.selectedModule ).subscribe({
      next: response => {
        this.openSnackBar(response.message)
      },
      error: error => {
        if(error){
          console.log(error)
        }
      },
      complete: () => {
        // console.log('Request complete');
      }
    });
  }

  openSnackBar(message: string) {
    let durationInSeconds = 5;
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: durationInSeconds * 1000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      data: message,
    });
  }

}
