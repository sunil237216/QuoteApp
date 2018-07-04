import { Component } from '@angular/core';
import { QuotesService } from '../../service/quote';
import  { Quote } from '../../data/quote.interface';
import  { ModalController } from 'ionic-angular';
import  { QuotePage } from '../quote/quote';

import  {SettingService} from '../../service/setting';


@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class Favorites {

quotes : Quote[];
constructor(private quotesService:QuotesService,private modalCtrl:ModalController,private settingService:SettingService){}

ionViewWillEnter()
{
	
this.quotes = this.quotesService.getFavouriteQuotes();
	
}

onViewQuote(quote: Quote)
{
const modal = this.modalCtrl.create(QuotePage,quote);
modal.present();
modal.onDidDismiss((remove: boolean) => {
if(remove)
{
	this.removeFromFavourites(quote);
}

});

}

removeFromFavourites(quote:Quote)
{
	
 this.quotesService.removeQuoteFromFavourite(quote);
	const position = this.quotes.findIndex((quoteEl: Quote) =>
      {

      return quoteEl.id == quote.id;

      });
      this.quotes.splice(position,1);


}

isAltBackground()
{

return this.settingService.isAltBackground();

}
getBackground()
{


return this.settingService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';

}

getFlag()
{


return this.quotesService.getItem();

}

}
