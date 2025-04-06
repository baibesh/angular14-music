import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IResponse } from '../interfaces/response.interface';
import { IMusic } from '../interfaces/music.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  playlist: IMusic[] = [
    {
      id: 1,
      title: 'CHEPIKK',
      filename: 'CHEPIKK.mp3',
      url: 'assets/CHEPIKK.mp3',
    },
    {
      id: 2,
      title: 'Brooklyn',
      filename: 'Brooklyn.mp3',
      url: 'assets/Brooklyn.mp3',
    },
  ];

  getPlaylist(): Observable<IResponse<IMusic>> {
    return of<IResponse<IMusic>>({ data: this.playlist });
  }
}
