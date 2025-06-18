import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-user-avatar',
  imports: [NgOptimizedImage],
  templateUrl: './user-avatar.component.html',
})
export class UserAvatar {
  readonly userId = input.required<string>();
}
