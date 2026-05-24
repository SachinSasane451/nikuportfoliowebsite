import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {

  intervals: { [key: number]: any } = {};
  currentIndexMap: { [key: number]: number } = {};
  hoveredIndex: number | null = null;

  experiences = [
    {
      school: '',
      images: [
        { src: 'assets/images/work/abasahebkakdeteachers.webp', label: 'Teaching Session' },
        { src: 'assets/images/work/anchoringniku.webp', label: 'Anchoring Activity' },
        { src: 'assets/images/work/teaching1niku.webp', label: 'Classroom Teaching' }
      ]
    },
    {
      school: '',
      images: [
        { src: 'assets/images/work/cleaningniku.webp', label: 'Cleanliness Drive' },
        { src: 'assets/images/work/craftniku.webp', label: 'Craft Activity' },
        { src: 'assets/images/work/meditationniku.webp', label: 'Meditation Session' },
        { src: 'assets/images/work/sanvidhandin.webp', label: 'Sanvidhan Din Activity' }
      ]
    }, {
    school: 'अमरापुर माध्यमिक व उच्च माध्यमिक विद्यालय',
    images: [
      { src: 'assets/images/internship/amrapur1.jpeg', label: 'Teaching Activity' },
      { src: 'assets/images/internship/amrapur2.jpeg', label: 'Classroom Session' },
      { src: 'assets/images/internship/amrapur3.jpeg', label: 'Student Engagement' },
      { src: 'assets/images/internship/amrapur4.jpeg', label: 'Learning Activity' },
      { src: 'assets/images/internship/amrapur5.jpeg', label: 'Teaching Practice' },
      { src: 'assets/images/internship/amrapur6.jpeg', label: 'School Activity' },
      { src: 'assets/images/internship/amrapur7.jpeg', label: 'Academic Session' }
    ]
  }
  ];

  ngOnInit() {
    this.experiences.forEach((_, i) => {
      this.currentIndexMap[i] = 0;
      this.startSlider(i);
    });
  }

  startSlider(index: number) {
    this.intervals[index] = setInterval(() => {
      const imgs = this.experiences[index].images;
      this.currentIndexMap[index] =
        (this.currentIndexMap[index] + 1) % imgs.length;
    }, 3000);
  }

  pause(index: number) {
    this.hoveredIndex = index;
    clearInterval(this.intervals[index]);
  }

  resume(index: number) {
  this.hoveredIndex = null;
  this.startSlider(index);
}

nextImage(index: number) {
  const total = this.experiences[index].images.length;

  this.currentIndexMap[index] =
    (this.currentIndexMap[index] + 1) % total;
}

prevImage(index: number) {
  const total = this.experiences[index].images.length;

  this.currentIndexMap[index] =
    (this.currentIndexMap[index] - 1 + total) % total;
}

ngOnDestroy() {
  Object.values(this.intervals).forEach(clearInterval);
}
}
