import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ``,
})
export class ToastComponent {
  public readonly isExpanded = input.required<boolean>();
  public readonly text = input.required<string>();

  public readonly onClose = output<{ isDismissed: boolean }>();
}
