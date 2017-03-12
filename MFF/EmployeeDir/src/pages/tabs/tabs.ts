import { Component } from '@angular/core';

import { EmployeeListPage } from '../employee-list/employee-list';
import { FavoritesPage } from '../favorites/favorites';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = EmployeeListPage;
  tab2Root: any = FavoritesPage;
  tab3Root: any = AboutPage;

  constructor() {

  }

}
