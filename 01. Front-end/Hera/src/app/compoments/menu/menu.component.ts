import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Cadastros',
      icon: 'po-icon po-icon-clipboard',
      shortLabel: 'Cad.',
      subItems: [
        {
          label: 'Produtos',
          link: 'product'
        }
      ]
    }
  ];

}
