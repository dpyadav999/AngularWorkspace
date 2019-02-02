import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchData"
})
export class SearchData implements PipeTransform {
  transform(input: any[], searchVar: string, searchCol: string) {
    if (searchVar != undefined && searchCol != undefined && searchVar != "") {
      return input.filter(e => e[searchCol].indexOf(searchVar) > -1);
    } else {
      return input;
    }
  }
}
