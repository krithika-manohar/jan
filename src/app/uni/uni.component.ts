import { Component } from '@angular/core';

@Component({
  selector: 'app-uni',
  templateUrl: './uni.component.html',
  styleUrls: ['./uni.component.css'],
})
export class UniComponent {
  gridData = [
    {
      img: '../assets/img/Icon-1.png',
      header: 'Qualification',
      para: 'Bachelor of Arts (with Honours) - BA (Hons)',
    },
    {
      img: '../assets/img/Icon-2.png',
      header: 'Location',
      para: 'Norwich University of the Arts',
    },
    {
      img: '../assets/img/Icon-3.png',
      header: 'Study mode',
      para: 'Full time',
    },

    {
      img: '../assets/img/Icon-4.png',
      header: 'Start date',
      para: 'SEP-24',
    },
    {
      img: '../assets/img/Icon-5.png',
      header: 'Duration',
      para: '3 years',
    },
  ];
  // constructor() {}
  name1 = '1';
}
