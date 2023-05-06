import { Component, OnInit } from '@angular/core';
import { PoCheckboxGroupOption, PoLoadingOverlayComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent implements OnInit {
  public text: string = 'Carregando'
  
  public ngOnInit(): void {
    this.onChangeCheckbox();
  }

  public onChangeCheckbox() {
    if (true) {
      setTimeout(() => {
      }, 200);
    }
  }
}