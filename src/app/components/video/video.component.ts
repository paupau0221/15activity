import { Component } from '@angular/core';
interface Video {
  title: string;
}
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
  videoList: Video[] = [
    { title: "The Shawshank Redemption" },
    { title: "The Dark Knight" },
    { title: "Pulp Fiction" }
  ];
  newVideoTitle: string = '';

  addVideo() {
    const newVideo: Video = { title: this.newVideoTitle };
    this.videoList.push(newVideo);
    this.newVideoTitle = '';
  }

  deleteVideo(index: number) {
    this.videoList.splice(index, 1);
  }
}
