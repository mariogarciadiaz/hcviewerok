import { AssistanceDetailComponent } from './components/assistance-detail/assistance-detail.component';
import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { AssistanceListComponent } from './components/assistance-list/assistance-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[
    HeaderComponent,
    AssistanceListComponent,
    AssistanceDetailComponent,
    RouterOutlet
  ]
})
export class AppComponent {
  title = 'hcviewer';
}
