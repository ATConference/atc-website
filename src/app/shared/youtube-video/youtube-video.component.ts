import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html'
})
export class YoutubeVideoComponent implements OnInit {
  @Input() videoId: string;
  mediaContentUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    const value = `https://www.youtube.com/embed/${this.videoId}`;
    this.mediaContentUrl = this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
