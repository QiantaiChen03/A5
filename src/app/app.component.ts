import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export interface IDocuments{
  src:string;
  name:string;
  description:string;
}

export class AppComponent {
  title = 'at-alternative-interaction-solution';
  public slides: IDocuments[] = [
    {
      src:
        'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      name: 'burger 1 ',
      description: 'food food food food',
    },
    {
      src:
        'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
      name: 'burger2',
      description: 'food food food food',
    },
    {
      src:
        'https://images.unsplash.com/photo-1498579485796-98be3abc076e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      name: 'burger 3',
      description: 'food food food food',
    },
  ];
}
