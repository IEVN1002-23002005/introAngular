import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList {

  listFilter: string = '';
  muestraImage: boolean = true;
  imageWidth: number = 80;
  imageMargin: number = 2;

  heroes: any[] = [
    {
      imagen: 'https://dragonball-api.com/characters/gohan.webp',
      nombre: 'Gohan',
      descripcion: 'Hijo de Goku y poderoso guerrero',
      race: 'Saiyan',
      ki: 40000000
    },
    {
      imagen: 'https://dragonball-api.com/characters/Freezer.webp',
      nombre: 'Freezer',
      descripcion: 'Emperador del universo',
      race: 'Frieza Race',
      ki: 530000
    },
    {
      imagen: "https://dragonball-api.com/characters/Krilin_Universo7.webp",
      nombre: 'Krilin',
      descripcion: 'Guerrero humano y amigo de Goku',
      race: 'Human',
      ki: 75000
    },
    {
      imagen: 'https://dragonball-api.com/characters/bulma.webp',
      nombre: 'Bulma',
      descripcion: 'Científica de Capsule Corporation',
      race: 'Human',
      ki: 5
    }
  ];

  showImage(): void {
    this.muestraImage = !this.muestraImage;
  }

}

