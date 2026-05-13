import { Component, signal } from '@angular/core';
import { DefaultComponent } from './default/default.component';
import { ButtonShowcaseComponent } from './button-showcase/button-showcase.component';
import { FieldStatesComponent } from './field-states/field-states.component';

type Page = 'button' | 'slide-toggle' | 'field-states';

@Component({
  selector: 'app-root',
  imports: [DefaultComponent, ButtonShowcaseComponent, FieldStatesComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly page = signal<Page>('field-states');

  show(p: Page) {
    this.page.set(p);
  }
}
