import { BaseHttpService } from '../../_services/http/base-http.service';
import { environment } from '../../../environments/environment';
import { AnimalMapper } from './../mapper/animal-mapper';
import { AnimalEntity } from './../entity/animal-entity';
import { AnimalModel, } from '../model/animal-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AnimalRepository {

    mapper = new AnimalMapper();


    constructor(public http: BaseHttpService, private httpCli: HttpClient) { }

    getAnimalById(id: number): Observable<AnimalModel> {
        return this.http
            .getAll<AnimalModel>(`${environment.URLSERVIDOR}animal/${id}`)
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    getAllAnimais(): Observable<AnimalModel> {
        return this.http
            .getAll<AnimalEntity[]>(`${environment.URLSERVIDOR}animal/instituicao`)
            .pipe(mergeMap((x) => x.data))
            .pipe(map((x) => this.mapper.mapFrom(x)));
    }

    async getAnimaisInstituicao(): Promise<AnimalModel[]> {
        const x = await this.http
            .getAll<AnimalEntity[]>(`${environment.URLSERVIDOR}animal/instituicao`)
            .toPromise();
        return x.data.map(this.mapper.mapFrom);
    }

    // getAnimalByFiltro(busca: String): Observable<AnimalModel> {
    //     return this.http
    //         .getAll<AnimalEntity[]>(`${environment.URLSERVIDOR}animal/filtrado?${busca}`)
    //         .pipe(mergeMap((x) => x.data))
    //         .pipe(map((x) => this.mapper.mapFrom(x)));
    // }

    async getAnimalByFiltro(busca: String): Promise<AnimalModel[]> {
        const x = await this.httpCli
            .get<AnimalEntity[]>(`${environment.URLSERVIDOR}animal/filtrado?${busca}`)
            .toPromise();
        return x.map(this.mapper.mapFrom);
    }

    
    postAnimal(param: AnimalModel) {
        return this.http
            .post<AnimalEntity>(`${environment.URLSERVIDOR}animal`, this.mapper.mapTo(param))
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    postImagem(param: any) {
        return this.http.post(`${environment.URLSERVIDOR}imagem`, param);
    }

    putAnimal(param: AnimalModel) {
        return this.http
            .put<void>(
                `${environment.URLSERVIDOR}animal/${param.id}`,
                this.mapper.mapTo(param)
            )
            .pipe(map((x) => x.data));
    }

    deleteAnimal(id: number): Observable<void> {
        return this.http
            .delete<void>(`${environment.URLSERVIDOR}animal/${id}`, id)
            .pipe(map((x) => x.data));
    }

}
