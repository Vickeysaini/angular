import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectsComponent } from './add-projects/add-projects.component';
import { ProjectsService } from 'src/app/core/services/projects.service';
import { DeleteConfirmationComponent } from 'src/app/shared/delete-confirmation/delete-confirmation.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import { EditProjectsComponent } from './edit-projects/edit-projects.component';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  // imports: [MatTableModule, MatPaginatorModule],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [ 'ProjectName', 'CustomerId', 'Action'];
  // dataSource = [] = [];
  dataSource: any;
  resultsLength = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  userInfo: any;


  constructor(
    public dialog: MatDialog,
    private projectService: ProjectsService,
  ) { }

  ngOnInit(): void {
    let dd: any = sessionStorage.getItem('user');
    this.userInfo = JSON.parse(dd);
    this.getProjects();
  }


  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  openDialog(element:any) {
     this.dialog.open(ViewProjectsComponent, {
      width: '500px',
      data: element
    }).afterClosed()
      .subscribe(result => {
        this.getProjects();
      });
  }
  openEditDialog(element:any) {
    this.dialog.open(EditProjectsComponent, {
      width: '500px',
      data: element
    }).afterClosed()
    .subscribe(result => {
      this.getProjects();
    });
  }
  addProject(){
    let dialogRef = this.dialog.open(AddProjectsComponent, {
      width: '500px',
    }).afterClosed()
      .subscribe(result => {
        this.getProjects();
      });
  } 

  getProjects() {
    this.projectService.getProjectByEmpId(this.userInfo.currentUser._id).subscribe({
      next: response => {
        // this.dataSource = response.data.records;
        this.dataSource = new MatTableDataSource(response.data.records);
        this.resultsLength = response.data.totalRecords
      },
      error: error => {
        if (error) {
          console.log(error)
        }
      },
      complete: () => {
        // console.log('Request complete');
      }
    });
  }

  deleteDialog(element: any) {
    let obj = {
      id: element._id,
      selectedModule: 'project'
    }
    this.dialog.open(DeleteConfirmationComponent, {
      data: obj,
      width: '500px',
    }).afterClosed().subscribe(result => {
      this.getProjects();
    });
  }

  editDialog() {

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    // }
  }

}