import { Component } from "@angular/core";

@Component({
  template: `
    <h1>Welcome to My Shopping App</h1>
    <h3>{{ content }}</h3>

    <h2 [innerHTML]="content"></h2>

   
    <button class="btn btn-success" (click)="incremnetCount()">
      Increament
    </button>

    <h3>Count value is :{{ this.count }}</h3>


    <input type="text" value="count" />
    <input type="text" [value]="count" />
    <input type="number" value="{{ count }}" />


    <input type="number" [(ngModel)]="count" />
  `
})
export class HomeComponent {
  content: string = "Sample Home component";

  count = 0;

  incremnetCount() {
    this.count++;
  }
}

@Component({
  template: "<h1>404....Under construction.</h1>"
})
export class NotFoundComponent {}

@Component({
  templateUrl: "./list.component.html"
})
export class ListComponent {
  constructor() {}
}
