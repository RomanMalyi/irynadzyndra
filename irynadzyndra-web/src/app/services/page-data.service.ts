import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PageData } from "../components/langClass/languageObject";

@Injectable()
export class PageDataService {
  allData: PageData;
  language: string;
  allImageUrlArray: string[];
  linesImageUrlArray: string[];
  horizonImageUrlArray: string[];
  terravitaImageUrlArray: string[];
  seineImageUrlArray: string[];
  linesCount: number;
  seineCount: number;
  horizonCount: number;
  terravitaCount: number;

  constructor(private httpService: HttpClient) {
    this.linesCount = 14;
    this.horizonCount = 13;
    this.terravitaCount = 24;
    this.seineCount = 6;
    this.linesImageUrlArray = [];
    this.horizonImageUrlArray = [];
    this.terravitaImageUrlArray = [];
    this.seineImageUrlArray = [];
    this.allImageUrlArray = [];

    this.language = "en";
    this.reloadData();
    for (let i = 1; i <= this.terravitaCount; ++i) {
      const image = "../../assets/terravita/terravita" + i + ".jpg";
      this.terravitaImageUrlArray.push(image);
      this.allImageUrlArray.push(image);
    }

    for (let i = 1; i <= this.horizonCount; ++i) {
      const image = "../../assets/horizon/horizon" + i + ".jpg";
      this.horizonImageUrlArray.push(image);
      this.allImageUrlArray.push(image);
    }
    const image1 = "../../assets/seine/seine" + 1 + ".jpg";
    this.seineImageUrlArray.push(image1);
    for (let i = 2; i <= this.seineCount; ++i) {
      const image = "../../assets/seine/seine" + i + ".jpg";
      this.seineImageUrlArray.push(image);
      this.allImageUrlArray.push(image);
    }

    for (let i = 2; i <= this.linesCount; ++i) {
      const image = "../../assets/lines/lines" + i + ".jpg";
      this.linesImageUrlArray.push(image);
      this.allImageUrlArray.push(image);
    }
  }

  reloadData() {
    this.httpService
      .get("./assets/i18n/" + this.language + ".json")
      .subscribe((data: PageData) => (this.allData = data));
  }
}
