import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-common-list',
  templateUrl: './common-list.component.html',
  styleUrls: ['./common-list.component.css'],
})
export class CommonListComponent implements OnInit {
  dataSource = new MatTableDataSource<Npc>(NPC_DATA);

  constructor() {
  }

  ngOnInit() {
  }
}

export interface Npc {
  id: number;
  name: string;
  level: number;
}

const NPC_DATA: Npc[] = [
  { id: 1, name: 'Baroness Anastari', level: 51 },
  { id: 2, name: 'Nerub\'enkan', level: 51 },
  { id: 3, name: 'Maleki the Pallid', level: 62 },
  { id: 4, name: 'Magistrate Barthilas', level: 51 },
  { id: 5, name: 'Ramstein the Gorger', level: 51 },
  { id: 6, name: 'Lord Aurius Rivendare', level: 51 },
];
