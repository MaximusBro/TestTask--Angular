import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss',"../app.component.scss"]
})
export class HeaderComponent  {
  @Input() curr!: string[]
  @Input() rates!: any





}
