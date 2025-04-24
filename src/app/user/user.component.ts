import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';

interface User {
  id: string,
  name: string,
  avatar: string
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {



  @Input({ required: true }) user!: {
    id: string,
    name: string,
    avatar: string

  };
  // @Input({ required: true }) name!: string;
  // name = input.required<string>();


  @Output() select = new EventEmitter<string>();

  // select = output<string>();



  get imagePath() {
    return "assets/users/" + this.user.avatar;
  }


  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
