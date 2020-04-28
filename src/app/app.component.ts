import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AluraaAngular';

  fotos = [
    {
      url: "https://i.imgur.com/XtUfH1Z.jpg",
      description : "Leao"
    },
    {
      url: "https://i.imgur.com/XtUfH1Z.jpg",
      description : "Leao"
    },
    {
      url: "https://i.imgur.com/XtUfH1Z.jpg",
      description : "Leao"
    }

  ];


}
