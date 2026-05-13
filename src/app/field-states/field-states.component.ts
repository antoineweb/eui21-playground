import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EUI_LABEL } from '@eui/components/eui-label';
import { EUI_INPUT_TEXT } from '@eui/components/eui-input-text';
import { EUI_TEXTAREA } from '@eui/components/eui-textarea';
import { EUI_SELECT } from '@eui/components/eui-select';

@Component({
  selector: 'FieldStates',
  templateUrl: 'component.html',
  styleUrl: 'component.scss',
  imports: [
    FormsModule,
    ...EUI_LABEL,
    ...EUI_INPUT_TEXT,
    ...EUI_TEXTAREA,
    ...EUI_SELECT,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldStatesComponent {
  readonly sample = 'Jean Dupont';
  readonly sampleLong = 'Multi-line value\nso you can see how the textarea\nrenders these states.';
  readonly country = 'fr';
}
