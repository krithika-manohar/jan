import { Component } from '@angular/core';

@Component({
  selector: 'app-key-stats',
  templateUrl: './key-stats.component.html',
  styleUrls: ['./key-stats.component.css'],
})
export class KeyStatsComponent {
  keyGrid = [
    {
      img: '../assets/img/graph.png',
      info: '../assets/img/info.png',
      header: 'WUSCA Ranking',
      text: '56/81',
    },
    {
      img: '../assets/img/bar.png',
      info: '../assets/img/info.png',
      header: 'CUG Subject Ranking',
      text: '56th',
    },
    {
      img: '../assets/img/bar.png',
      info: '../assets/img/info.png',
      header: 'CUG Ranking',
      text: '56th',
    },
  ];
  dropGrid = [
    {
      header: 'Drop-out Rate',
      img: '../assets/img/info.png',
      para: '89%',
      src1: '../assets/img/grey.png',
      src2: '../assets/img/green.png',
    },
    {
      header: 'Employment Rate',
      img: '../assets/img/info.png',
      para: '45%',
      src1: '../assets/img/grey.png',
      src2: '../assets/img/green2.png',
    },
  ];
  politicsGrid = [
    {
      content: 'Politics salary within univ',
      img: '../assets/img/info.png',
      price: '£22,000',
    },
    {
      content: 'UK Politics graduate salary',
      img: '../assets/img/info.png',
      price: '£21,000',
    },
  ];
}
