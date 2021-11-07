import {Component, OnInit, ViewChild} from '@angular/core';
import {PageDataService} from '../../services/page-data.service';
import {GALLERY_CONF, GALLERY_IMAGE, NgxImageGalleryComponent} from 'ngx-image-gallery';

@Component({
  selector: 'app-terravita',
  templateUrl: './terravita.component.html',
  styleUrls: ['./terravita.component.css']
})
export class TerravitaComponent implements OnInit {
  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;
  images: GALLERY_IMAGE[];

  // gallery configuration
  conf: GALLERY_CONF = {
    imageOffset: '10px',
    showDeleteControl: false,
    showImageTitle: true,
  };

  constructor(public pageData: PageDataService) {
    this.images = [];
    for (let i = 0; i < this.pageData.terravitaCount; ++i) {
      this.images.push({
        url: this.pageData.terravitaImageUrlArray[i],
        title: this.pageData.allData.imagesTerravitaNotes[i],
        thumbnailUrl: this.pageData.terravitaImageUrlArray[i],
        altText: 'terravitaImage'
      });
    }
  }

  // METHODS
  // open gallery
  openGallery(index: number = 0) {
    this.ngxImageGallery.open(index);
  }

  // close gallery
  closeGallery() {
    this.ngxImageGallery.close();
  }

  // set new active(visible) image in gallery
  newImage(index: number = 0) {
    this.ngxImageGallery.setActiveImage(index);
  }

  // next image in gallery
  nextImage(index: number = 0) {
    this.ngxImageGallery.next();
  }

  // prev image in gallery
  prevImage(index: number = 0) {
    this.ngxImageGallery.prev();
  }

  /**************************************************/

  // EVENTS
  // callback on gallery opened
  galleryOpened(index) {
    //console.info('Gallery opened at index ', index);
  }

  // callback on gallery closed
  galleryClosed() {
    //console.info('Gallery closed.');
  }

  // callback on gallery image clicked
  galleryImageClicked(index) {
    //console.info('Gallery image clicked with index ', index);
  }

  // callback on gallery image changed
  galleryImageChanged(index) {
    //console.info('Gallery image changed to index ', index);
  }

  // callback on user clicked delete button
  deleteImage(index) {
    //console.info('Delete image at index ', index);
  }

  ngOnInit() {
  }

}
