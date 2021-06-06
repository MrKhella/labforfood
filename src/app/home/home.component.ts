import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  images: Array<any> = [
    { path: '../../assets/img/imgGallery/01.jpg' },
    { path: '../../assets/img/imgGallery/02.jpg' },
    { path: '../../assets/img/imgGallery/03.jpg' },
    { path: '../../assets/img/imgGallery/04.jpg' },
    { path: '../../assets/img/imgGallery/05.jpg' },
    { path: '../../assets/img/imgGallery/06.jpg' },
    { path: '../../assets/img/imgGallery/07.jpg' },
    { path: '../../assets/img/imgGallery/08.jpg' },
    { path: '../../assets/img/imgGallery/09.jpg' },
    { path: '../../assets/img/imgGallery/10.jpg' },
    { path: '../../assets/img/imgGallery/11.jpg' },
    { path: '../../assets/img/imgGallery/12.jpg' },
    { path: '../../assets/img/imgGallery/13.jpg' },
    { path: '../../assets/img/imgGallery/14.jpg' },
    { path: '../../assets/img/imgGallery/15.jpg' },
    { path: '../../assets/img/imgGallery/16.jpg' },
    { path: '../../assets/img/imgGallery/17.jpg' },
    { path: '../../assets/img/imgGallery/18.jpg' },
    { path: '../../assets/img/imgGallery/19.jpg' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
