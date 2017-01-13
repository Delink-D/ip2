import { NgModule }      		from '@angular/core';
import { BrowserModule } 		from '@angular/platform-browser';
import { FormsModule }   		from '@angular/forms';

import { NewFoodComponet } 		from './new-food.component';
import { FoodComponent } 		from './food-list.component';
import { AppComponent }   		from './app.components';

@NgModule ({
	imports: [
		BrowserModule,
		FormsModule
	],
	declarations :
	[
		AppComponent,
		FoodComponent,
		NewFoodComponet
	],
	bootstrap: [ AppComponent ]
})

export class AppModule {

}