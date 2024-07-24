import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UnidadeFederativa } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class UnidadeFederativaService {
  private apiUrl: string = environment.apiUrl
  private cache$?: Observable<UnidadeFederativa[]>;

  constructor(
    private http: HttpClient
  ) {
  }

  listar() : Observable<UnidadeFederativa[]> {
    if (!this.cache$) {
      this.cache$ = this.requestEstados().pipe(
        shareReplay(1)
      );
    }

    return this.cache$;
  }

  private requestEstados(): Observable<UnidadeFederativa[]> {
    return this.http.get<UnidadeFederativa[]>(`${this.apiUrl}/estados`);
  }
}

/*
O operador shareReplay é uma funcionalidade poderosa do RxJS que permite armazenar
em cache o resultado de um Observable. Isso é especialmente útil quando lidamos com
dados que não mudam com frequência, como a lista de unidades federativas do formulário
de busca de passagens aéreas.
Ao utilizar o shareReplay, podemos evitar chamadas desnecessárias à API. Uma vez que
os dados já foram buscados, eles são armazenados em cache e podem ser reutilizados,
proporcionando um melhor desempenho e otimização da aplicação.
*/
