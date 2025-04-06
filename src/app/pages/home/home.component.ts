import { Component } from '@angular/core';
import { IMusic } from '../../core/interfaces/music.interface';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  displayedColumns: string[] = ['id', 'title', 'filename'];
  dataSource!: IMusic[];
  selectAudio: IMusic | null = null;

  constructor(private apiService: ApiService) {
    this.apiService.getPlaylist().subscribe({
      next: (value) => {
        this.dataSource = value.data;
      },
    });
  }

  playMusic(music: IMusic): void {
    this.selectAudio = music;
  }
}
