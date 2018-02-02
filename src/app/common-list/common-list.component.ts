import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-common-list',
  templateUrl: './common-list.component.html',
  styleUrls: ['./common-list.component.css'],
})
export class CommonListComponent implements OnInit {
  target: string;
  data;
  dataSource: MatTableDataSource<any>;
  columns: string[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private commonService: CommonService,
  ) {}

  ngOnInit() {
    const url = this.route.snapshot.url;
    const lastSegment = url[url.length - 1];
    this.target = lastSegment.path;
    this.data = this.commonService.getList(this.target);
    this.dataSource = new MatTableDataSource(this.data.rows);
    this.columns = this.data.cols.map(s => s.name);
  }

  handleRowClick(row) {
    this.router.navigate([`/${this.target}/${row.id}`]);
  }
}
