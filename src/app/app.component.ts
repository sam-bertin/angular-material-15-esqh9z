import { Component } from '@angular/core';

type Card = {
  title: string;
  subtitle: string;
  imgSource: string;
  cardContent: string;
  action1: string;
  action2: string;
  cardFooter: string;
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  liste: Card[] = [
    {
      title: 'Titre 1',
      subtitle: 'Sous titre 1',
      imgSource: 'link',
      cardContent: 'Content 1',
      action1: 'Action 1',
      action2: 'Action 2',
      cardFooter: 'Footer',
    },
    {
      title: 'Titre 2',
      subtitle: 'Sous titre 2',
      imgSource: 'link',
      cardContent: 'Content 2',
      action1: 'Action 2',
      action2: 'Action 3',
      cardFooter: 'Footer',
    },
  ];
}
