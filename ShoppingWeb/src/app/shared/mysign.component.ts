import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnDestroy
} from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "my-sign",
  templateUrl: "./mysign.component.html"
})
export class MySignComponent implements OnDestroy {
  @Input() title: string = "";
  @Output() myEvent = new EventEmitter();

  handleButtonCLick(name: string, pwd: string) {
    console.log("UserName:" + name + "     Password:" + pwd);
    this.myEvent.emit({ name, pwd });
  }
  constructor() {
    console.log("mysign Created: ", this.title);
  }
  ngOnChanges() {
    console.log("mysign on On Changes: ", this.title);
  }
  ngOnInit() {
    console.log("mysign on Init: ", this.title);
  }
  ngOnDestroy() {
    console.log("mysign Destroyed", this.title);
  }
}
