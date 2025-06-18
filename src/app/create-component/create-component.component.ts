import {
  ChangeDetectionStrategy,
  Component,
  inputBinding,
  outputBinding,
  signal,
  twoWayBinding,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { ToastComponent } from './toast.component';
import { FocusTrap } from '@angular/cdk/a11y';

@Component({
  selector: 'app-create-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <ng-container #container /> `,
})
export class CreateComponentComponent {
  private readonly vcr = viewChild.required('container', { read: ViewContainerRef });

  public readonly text = signal('This is a toast message');
  public readonly isExpanded = signal(false);

  public createComponent(): void {
    this.vcr().createComponent(ToastComponent, {
      bindings: [
        inputBinding('text', this.text),
        twoWayBinding('isExpanded', this.isExpanded),
        outputBinding<{ isDismissed: boolean }>('onClose', ({ isDismissed }) => console.log(isDismissed)),
      ],
      directives: [FocusTrap],
    });
  }
}
