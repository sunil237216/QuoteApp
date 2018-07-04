import { Component, OnInit } from '@angular/core';
import {NavParams} from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../service/quote';
import { SettingService } from '../../service/setting';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class Quotes implements OnInit {

quoteGroup:{category:string,quotes:Quote[],icon:String};

constructor(private navParams:NavParams,private quoteService:QuotesService,private settingService:SettingService){}

ngOnInit()
{
	this.quoteGroup = this.navParams.data;
}

onAddToFavourite(selectedQuote:Quote)
{


	 this.quoteService.addQuoteToFavourites(selectedQuote);

	 
/*const alert= this.alertCtrl.create({
	
title:'Add Quote',
subTitle:'Are you sure?',
message:'Are you sure you want to add this quote?',
buttons: [
{
	text:'Yes, go ahead',
	handler: () => {

    
	}
	},{
	text:'No I changed My mind',
	handler: () => {

	console.log('Cancelled');
	}
	}
]
});*/

//alert.present();
	
}
onRemoveFromFavourite(quote: Quote)
{
	
this.quoteService.removeQuoteFromFavourite(quote);

}

isFavourite(quote: Quote)
{
	
	return this.quoteService.isQuoteFavourite(quote);
}

isAltBackground()
{
return this.settingService.isAltBackground();

}

}
