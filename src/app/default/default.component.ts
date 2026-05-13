import { Component, ChangeDetectionStrategy } from '@angular/core';

import { EUI_SLIDE_TOGGLE } from '@eui/components/eui-slide-toggle';

@Component({
  selector: 'Default',
  templateUrl: 'component.html',
  imports: [...EUI_SLIDE_TOGGLE],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultComponent {}
