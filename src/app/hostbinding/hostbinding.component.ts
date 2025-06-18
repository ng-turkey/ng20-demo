import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hostbinding',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ``,
  // Type Safety
  // host: { '(mousedown)': 'mouseDownEvent()' },

  host: { '(mousedown)': 'handleMousedown()' },

  // Void operator
  // host: { '(mousedown)': 'void handleMousedown()' },
})
export class HostbindingComponent {
  public handleMousedown() {
    return false;
  }
}
