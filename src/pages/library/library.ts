import { Component, OnInit } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quotes';
import {Quotes} from '../quotes/quotes';
import  {SettingService} from '../../service/setting';
import { AdMobFreeBannerConfig, AdMobFree } from "@ionic-native/admob-free";


@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class Library implements OnInit {

quoteCollection: {category: string,quotes:Quote[],icon:String}[];
quotePage=Quotes;

constructor(private admobFree : AdMobFree,private settingService: SettingService){

    this.showAdmobBannerAds();
}

ngOnInit()
{
	
	this.quoteCollection=quotes;
}
isAltBackground()
{
return this.settingService.isAltBackground();

}

   // reorderItems(indexes){
   //     this.quoteCollection = reorderArray(this.quoteCollection, indexes);
   // }

   showAdmobBannerAds(){
    const bannerConfig: AdMobFreeBannerConfig = {
       id:'ca-app-pub-8262935217824815/2817631733',
       isTesting: false,
        autoShow: true
    };
    this.admobFree.banner.config(bannerConfig);
  
    this.admobFree.banner.prepare()
    .then(() => {
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here
    })
    .catch(e => console.log(e));    
    }  
  

}
