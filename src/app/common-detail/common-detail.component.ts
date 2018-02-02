import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-common-detail',
  templateUrl: './common-detail.component.html',
  styleUrls: ['./common-detail.component.css'],
})
export class CommonDetailComponent implements OnInit {
  target;
  cols;
  row;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const url = this.route.snapshot.url;
    this.target = url[url.length - 2].path;

    const id = +this.route.snapshot.paramMap.get('id');
    this.cols = MOCK_DATA[this.target].cols;
    this.row = MOCK_DATA[this.target].rows.find(r => r.id === id);
  }
}

const MOCK_DATA = {
  npcs: {
    cols: [
      {
        type: 'id',
        name: 'id',
        display: 'Id',
      },
      {
        type: 'string',
        name: 'name',
        display: 'Name',
      },
      {
        type: 'integer',
        name: 'level',
        display: 'Level',
      },
    ],
    rows: [
      { id: 1, name: 'Baroness Anastari', level: 51 },
      { id: 2, name: 'Nerub\'enkan', level: 51 },
      { id: 3, name: 'Maleki the Pallid', level: 62 },
      { id: 4, name: 'Magistrate Barthilas', level: 51 },
      { id: 5, name: 'Ramstein the Gorger', level: 51 },
      { id: 6, name: 'Lord Aurius Rivendare', level: 51 },
    ],
  },
  items: {
    cols: [
      {
        type: 'id',
        name: 'id',
        display: 'Id',
      },
      {
        type: 'string',
        name: 'name',
        display: 'Name',
      },
      {
        type: 'type',
        name: 'type',
        display: 'Type',
      },
    ],
    rows: [
      { id: 1, name: 'Shadowy Laced Handwraps', type: 'Cloth Armor' },	
      { id: 2, name: 'Screeching Bow', type: 'Bow' },
      { id: 3, name: 'Anastari Heirloom', type: 'Amulet' },
      { id: 4, name: 'Banshee Finger', type: 'Wand' },
      { id: 5, name: 'Chillhide Bracers', type: 'Leather Armor' },
      { id: 6, name: 'Windshrieker Pauldrons', type: 'Mail Armor' },
      { id: 7, name: 'Banshee\'s Touch', type: 'Plate Armor' },      
    ],
  },
};
