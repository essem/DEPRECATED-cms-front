import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-common-detail',
  templateUrl: './common-detail.component.html',
  styleUrls: ['./common-detail.component.css'],
})
export class CommonDetailComponent implements OnInit {
  detail;

  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService,
  ) {}

  ngOnInit() {
    const url = this.route.snapshot.url;
    const tableName = url[url.length - 2].path;

    const id = +this.route.snapshot.paramMap.get('id');
    this.detail = this.commonService.getDetail(tableName, id);
  }
}
