import { Component } from '@angular/core';
import { Favorites } from '../favorites/favorites';
import { Library } from '../library/library';

@Component({
  selector: 'page-tabs',
  template: `
  <ion-tabs selectedIndex="1">
  <ion-tab [root]="favourite" TabTitle="Favourite" tabIcon="star"></ion-tab>
   <ion-tab [root]="library" TabTitle="Library" tabIcon="book"></ion-tab>
  </ion-tabs>
  `
})
export class TabsPage {
  favourite=Favorites;
  library=Library;

}
