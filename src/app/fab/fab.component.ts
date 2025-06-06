import { Component, Input } from '@angular/core';

@Component({
	selector: 'wr-fab',
	standalone: false,
	templateUrl: './fab.component.html',
	styleUrl: './fab.component.scss'
})
export class FabComponent {
	@Input() mode?: 'simple' | 'extended' | 'default' = 'simple'
	@Input() size?: 'small' | 'large' | 'default' = 'large'
	@Input({ alias: 'aria-label' }) ariaLabel?: string | null
	@Input() icon?: string | null

	constructor() {
		this.mode = 'default';
		this.size = 'default';
	}

	onClick(event: MouseEvent): void {
		console.log(
			this.icon,
			this.ariaLabel,
			this.mode,
			this.size
		)
	}
}
