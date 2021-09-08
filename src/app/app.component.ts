import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl="../assets/BridgeLabz.jpg";
  url = "https://www.bridgelabz.com";
  userName: string = "";
  nameError: string = "";

ngOnInit(): void {
    this.title = "Hello from Bridgelabz.";
  }

onClick($event: any){
  console.log("save button is clicked!", $event);
  window.open(this.url, "_blank");
  }

onInput($event: any){
  console.log("Change Event Occurred!", $event.data);
  const nameRegex = RegExp('^[A-Z][a-zA-Z\\s]{2,}$');
  if (nameRegex.test(this.userName)) {
    this.nameError = "";
    return;
  }
  this.nameError = "Name is Incorrect!";
  }
}