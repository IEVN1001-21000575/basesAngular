import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.component.html',
  styleUrls: ['./zodiaco.component.css']
})
export class zodiacoComponent implements OnInit {
  formulario!: FormGroup;
  imageWidth: number = 400;
  imageMargin: number = 2;
  muestraImg: boolean = true;
  signoZodiacal: string = '';
  imagenSigno: string = '';
  mensaje: string = '';
  


  private signosZodiacales: Record<string, string> = {
    'Rata': 'https://elcomercio.pe/resizer/0_t0zNMovrO0kdtZoDxf1mI_UqE=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6HOPIG5WKFF7DAHCIHFH5ZGVG4.jpg',
    'Buey': 'https://peopleenespanol.com/thmb/ia0u33jxk7_bfFTLf1viDW9j5LA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/horoscopo-chino-buey-de-metal-2021-e93c7ebe89ab4c0daa8704d6e4a827dd.png',
    'Tigre': 'https://www.cronista.com/files/image/717/717291/6568adb447231.jpg',
    'Conejo': 'https://peopleenespanol.com/thmb/-ekXDGhFH6Baw6C29OGuDxf8iDQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165927323-2000-c6361314aab74b7485a5ea677666ba83.jpg',
    'Dragón': 'https://peopleenespanol.com/thmb/blSccuj1LqAcyBOI-SNWH1k_9LE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165942305-2000-8fe379790e0e4ccba8ea80e33697647e.jpg',
    'Serpiente': 'https://peopleenespanol.com/thmb/Who-b06dJwjtqnuJ406zgMaq4kg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165965553-2000-e4700b87c9fd404681a502f7095c2ac5.jpg',
    'Caballo': 'https://peopleenespanol.com/thmb/NmX4UUt1APhp__iVTPZtQJim9t8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165967001-2000-57bb5c0eac9247e4a6b9afe14505f364.jpg',
    'Cabra': 'https://peopleenespanol.com/thmb/Fwy99mIonHJYbhmA9AOTeWCpkdU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165967741-2000-12afb4d370f14afe856f05ba36fe1693.jpg',
    'Mono': 'https://peopleenespanol.com/thmb/Wpxezb6zTd3sJ4sB90GtyUfFPpo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165967347-2000-141e78d49c344d73a216c09df52f7fcb.jpg',
    'Gallo': 'https://peopleenespanol.com/thmb/Th2wLXhS9Tzh3VR7DtVB9CwgUFE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165926089-2000-25a52aba2d0942679de98ba836f1ab9f.jpg',
    'Perro': 'https://studycli.org/wp-content/uploads/2021/06/chinese-new-year-year-of-the-dog-paper-cutting.jpeg',
    'Cerdo': 'https://peopleenespanol.com/thmb/3_4ezJWMT8DtQSEuV5vMg3X8DUE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165969332-2000-eea5e27d3f4145c9b01121f4c61ccaef.jpg'
  };

  constructor() {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      dia: new FormControl('', [Validators.required, Validators.min(1), Validators.max(31)]),
      mes: new FormControl('', [Validators.required, Validators.min(1), Validators.max(12)]),
      anio: new FormControl('', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]),
      sexo: new FormControl('', Validators.required)
    });
  }

  calcularSigno(): void {
    if (this.formulario.valid) {
      const anio = this.formulario.get('anio')?.value;
      this.signoZodiacal = this.obtenerSignoZodiacal(anio);
      this.imagenSigno = this.obtenerImagenSigno(this.signoZodiacal);
    } else {
      this.signoZodiacal = '';
      this.imagenSigno = '';
    }
  }

  obtenerSignoZodiacal(anio: number): string {
    const signos: string[] = [
      'Rata', 'Buey', 'Tigre', 'Conejo', 
      'Dragón', 'Serpiente', 'Caballo', 
      'Cabra', 'Mono', 'Gallo', 'Perro', 
      'Cerdo'
    ];
    

    const baseYear = 1924;
    const index = (anio - baseYear) % 12;
    
 
    return signos[(index + 12) % 12];
  }

  obtenerImagenSigno(signo: string): string {
    return this.signosZodiacales[signo] || '';
  }

  mostrarImagen(): void {
    this.muestraImg = !this.muestraImg;
  }

  onSubmit(): void {
    this.calcularSigno();
    if (this.formulario.valid) {
      this.mensaje = `¡Hola, ${this.formulario.get('nombre')?.value}! Tu signo zodiacal es ${this.signoZodiacal}.`;
    }
  }
}
