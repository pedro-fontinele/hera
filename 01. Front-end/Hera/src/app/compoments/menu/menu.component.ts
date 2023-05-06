import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { Routes } from 'src/app/helper/routes/routes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public logo: string = 'assets/imgs/logo-nolepng.png';

  constructor() {}

  ngOnInit() {}

  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Cadastro',
      icon: 'po-icon po-icon-clipboard',
      shortLabel: 'Cad.',
      subItems: [
        {
          label: 'Produto',
          link: Routes.Product
        },
        {
          label: 'Cliente'
        },
        {
          label: 'Fornecedor'
        },
        {
          label: 'Categoria'
        },
        {
          label: 'Empresa'
        },
        {
          label: 'Local de armazenamento'
        }
      ]
    }
  ];

}
