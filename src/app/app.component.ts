import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl="../assets/BridgeLabz.jpg";

ngOnInit(): void {
    this.title = "Hello from Bridgelabz.";
  }
}