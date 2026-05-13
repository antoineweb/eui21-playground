import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

import { EUI_BUTTON } from '@eui/components/eui-button';

@Component({
  selector: 'ButtonShowcase',
  templateUrl: 'component.html',
  styleUrl: 'component.scss',
  imports: [...EUI_BUTTON],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonShowcaseComponent {
  readonly lastClick = signal<string>('—');

  onClick(label: string) {
    this.lastClick.set(`${new Date().toLocaleTimeString()} · ${label}`);
  }
}
