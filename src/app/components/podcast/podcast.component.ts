import { Component } from '@angular/core';
interface PodcastEpisode {
  title: string;
}

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrl: './podcast.component.css'
})
export class PodcastComponent {
  episodeList: PodcastEpisode[] = [
    { title: "Episode 1: The Introduction" },
    { title: "Episode 2: The Big Reveal" },
    { title: "Episode 3: The Twist" }
  ];
  newEpisodeTitle: string = '';

  addEpisode() {
    const newEpisode: PodcastEpisode = { title: this.newEpisodeTitle };
    this.episodeList.push(newEpisode);
    this.newEpisodeTitle = '';
  }

  deleteEpisode(index: number) {
    this.episodeList.splice(index, 1);
  }
}
