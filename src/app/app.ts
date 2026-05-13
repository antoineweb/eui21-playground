import { Component, signal } from '@angular/core';
import { DefaultComponent } from './default/default.component';
import { ButtonShowcaseComponent } from './button-showcase/button-showcase.component';

type Page = 'slide-toggle' | 'button';

@Component({
  selector: 'app-root',
  imports: [DefaultComponent, ButtonShowcaseComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly page = signal<Page>('button');

  show(p: Page) {
    this.page.set(p);
  }
}
