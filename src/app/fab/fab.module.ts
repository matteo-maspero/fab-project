import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FabComponent } from '../fab/fab.component';

@NgModule({
	declarations: [
		FabComponent
	],
	imports: [
		CommonModule,
		MatButtonModule,
		MatIconModule
	],
	exports: [
		FabComponent
	],
	providers: [],
	bootstrap: [
		FabComponent
	],
})
export class FabModule { }
