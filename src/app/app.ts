import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BoxContentComponent } from './box-content/box-content.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, HeaderComponent, BoxContentComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('flexbox-practice');
}
