import { Component } from '@angular/core';
import { DepoimentoService } from 'src/app/core/services/depoimento.service';
import { Depoimento } from 'src/app/core/types/type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  depoimentos!: Depoimento[];

  constructor(private service: DepoimentoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((res) => {
      this.depoimentos = res;
    });
  }
}
