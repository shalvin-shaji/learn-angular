import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
import { TasksService } from '../tasks/tasks.service';


@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({ required: true }) user!: User;
  // @Input({ required: true }) name!: string;
  // name = input.required<string>();
  @Input({ required: true }) selected!: boolean;


  @Output() select = new EventEmitter<string>();

  // select = output<string>();



  get imagePath() {
    return "assets/users/" + this.user.avatar;
  }


  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
