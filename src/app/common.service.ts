import * as _ from 'lodash';
import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  constructor() {}

  getRoots() {
    const entries = _.entries(database).filter(entry => entry[1].display);
    return entries.map(entry => ({ display: entry[1].display, name: entry[0] }));
  }

  getList(tableName: string) {
    return database[tableName];
  }

  getDetail(tableName: string, id: number) {
    return {
      cols: database[tableName].cols,
      row: database[tableName].rows.find(r => r.id === id),
    };
  }
}

/* tslint:disable:max-line-length */
const database = {
  npcs: {
    display: 'Npcs',
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
    display: 'Items',
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
