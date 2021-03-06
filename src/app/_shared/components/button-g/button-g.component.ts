import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-g',
  templateUrl: './button-g.component.html',
  styleUrls: ['./button-g.component.css'],
})
export class ButtonGComponent implements OnInit {
  @Input() nomeBotao: string;
  @Input() disabled: boolean;
  @Input() exibir: boolean;
  @Input() type: string;
  @Input() size: string;
  
  @Output() onClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}


  buttonClicked(event) {
    this.onClick.emit(event)
  }
}