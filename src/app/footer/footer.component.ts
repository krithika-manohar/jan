import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
// export class FooterComponent {
//   footerDivLinks = ['quick links', 'fast links', 'slow links'];
//   footerList1: any = [
//     { head: 'quick links' },
//     'Editor@whatuni.com',
//     'contact us',
//     'About Whatuni',
//     'Student Choice Awards',
//     'The Whatuni Team',
//     'Our Partners',
//     'Terms & Conditions',
//   ];
//   footerList2 = [
//     'b@whatuni.com',
//     'contact us',
//     'About Whatuni',
//     'Student Choice Awards',
//     'The Whatuni Team',
//     'Our Partners',
//     'Terms & Conditions',
//   ];
//   footerList3 = [
//     'c@whatuni.com',
//     'contact us',
//     'About Whatuni',
//     'Student Choice Awards',
//     'The Whatuni Team',
//     'Our Partners',
//     'Terms & Conditions',
//   ];
// }
export class FooterComponent {
  grids = [
    {
      headerText: 'Quick Links',

      items: [
        'Editor@whatuni.com',
        'Contact us',
        'About Whatuni',
        'Student Choice Awards',
        'The Whatuni Team',
        'Our Partners',
        'Terms & Conditions',
        'Privacy Notice',
        'Cookies Notice',
      ],
    },
    {
      headerText: 'Browse',

      items: [
        'courses',
        'universities',
        'guide',
        'advertisers',
        'calculators',
        'tariff',
        'clearing',
        'sitemap',
      ],
    },
    {
      headerText: 'Subjects',

      items: [
        'physics',
        'computer science',
        'acting',
        'business',
        'chemical engineering',
        'law',
        'literature',
        'biology',
        'art',
      ],
    },
  ];
}
