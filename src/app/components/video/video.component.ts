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
  videoLis: Video[] = [
    { title: "Unbelievable Transformation: How I Changed My Life in 30 Days!" },
    { title: "Top 10 Mind-Blowing Facts You Didn't Know About Space!" },
    { title: "Epic Cooking Challenge: Can We Make a Gourmet Meal for Under $10?" }
  ];
  newVideoTitle: string = '';

  addVideo() {
    const newVideo: Video = { title: this.newVideoTitle };
    this.videoLis.push(newVideo);
    this.newVideoTitle = '';
  }

  deleteVideo(index: number) {
    this.videoLis.splice(index, 1);
  }
}
