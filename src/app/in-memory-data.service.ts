import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: '古剑奇谭3' },
      { id: 2, name: '紫塞秋风' },
      { id: 3, name: '轩辕剑柒' },
      { id: 4, name: '鬼谷八荒' },
      { id: 5, name: '波西亚时光' },
      { id: 6, name: '侠隐阁' },
      { id: 7, name: '港诡实录' },
      { id: 8, name: '天命奇御' },
      { id: 9, name: '仙剑奇侠传七' },
      { id: 11, name: '了不起的修仙模拟器' },
      { id: 12, name: '烟火' },
      { id: 13, name: '光明记忆' },
      { id: 14, name: '戴森球计划' },
      { id: 15, name: '枪火重生' },
      { id: 16, name: '隐形守护者' },
      { id: 17, name: '中国式家长' },
      { id: 18, name: '侠客风云传' },
      { id: 19, name: '河洛群侠传' },
      { id: 20, name: '太吾绘卷' },
      { id: 21, name: '蜡烛人' },
      { id: 23, name: '圣女战旗' },
      { id: 24, name: '三色绘恋' },
      { id: 25, name: '斩妖行' },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}