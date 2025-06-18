import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-exponentiation-operator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` {{2 ** 3}} => 8 {{3 ** 3}} => 27 `,
})
export class ExponentiationOperatorComponent {}
