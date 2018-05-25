import { Component, OnInit } from '@angular/core';

import { AdminService } from '../../services/admin.service';
import { ItemIndexingProgress, IndexingProgress } from '../../objects/itemindexingprogress';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  message: String;
  progress: IndexingProgress;

  ngOnInit() {

    this.adminService.getProgress().subscribe(progress => this.progress = progress);
  }

  startIndexing(): void {

     this.adminService.startIndexing().subscribe(message => this.message = message.message);
  }
}
