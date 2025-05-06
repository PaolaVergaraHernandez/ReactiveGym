import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() title!: string; // <-- con "i" minúscula
  @Input() imageUrl!: string;
  @Input() location!: string;
  @Input() description?: string;
}
