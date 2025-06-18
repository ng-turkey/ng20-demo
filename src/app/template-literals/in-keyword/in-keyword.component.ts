import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-in-keyword',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './in-keyword.component.html',
})
export class InKeywordComponent {
  readonly attacks = [{ magicDamage: 10 }, { physicalDamage: 10 }, { magicDamage: 10, physicalDamage: 10 }];
}
