import { InstituicaoModel } from './../model/instituicao-model';
import { BaseHttpService } from './../../_services/http/base-http.service';
import { environment } from './../../../environments/environment';
import { InstituicaoMapper } from './../mapper/Instituicao-mapper';
import { InstituicaoEntity } from './../entity/instituicao-entity';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InstituicaoRepository {
  mapper = new InstituicaoMapper();

  constructor(public http: BaseHttpService) {}

  getInstituicaoById(id: number): Observable<InstituicaoModel> {
    return this.http
      .getAll<InstituicaoModel>(`${environment.URLSERVIDOR}instituicao/${id}`)
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  getAllInstituicoes(): Observable<InstituicaoModel> {
    return this.http
      .getAll<InstituicaoEntity[]>(`${environment.URLSERVIDOR}instituicao`)
      .pipe(mergeMap((x) => x.data))
      .pipe(map((x) => this.mapper.mapFrom(x)));
  }

  postInstituicao(param: InstituicaoModel) {
    return this.http
      .post<InstituicaoEntity>(
        `${environment.URLSERVIDOR}instituicao`,
        this.mapper.mapTo(param)
      )
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  putInstituicao(param: InstituicaoModel) {
    return this.http
      .put<void>(
        `${environment.URLSERVIDOR}instituicao`,
        this.mapper.mapTo(param)
      )
      .pipe(map((x) => x.data));
  }

  deleteCliente(id: number): Observable<void> {
    return this.http
      .delete<void>(`${environment.URLSERVIDOR}instituicao/${id}`, id)
      .pipe(map((x) => x.data));
  }
}