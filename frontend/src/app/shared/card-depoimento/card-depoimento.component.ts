import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrls: ['./card-depoimento.component.scss']
})
export class CardDepoimentoComponent {
  @Input() imagem: string = ''
  @Input() depoimento: string = ''
  @Input() autoria: string = ''
  @Input() alt: string = ''
}
