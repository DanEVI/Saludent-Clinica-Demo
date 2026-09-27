export interface Servicio {
  nombre: string;
  icono: string;
  descripcion: string;
  duracion: string;
  precioRegular: number;
  precioHoy: number;
  promo: number;
}

export const SERVICIOS: Servicio[] = [
  {
    nombre: 'Limpieza y profilaxis',
    icono: 'bi-droplet-half',
    descripcion:
      'Eliminamos sarro y placa bacteriana para prevenir caries y enfermedades de las encías.',
    duracion: '45 min',
    precioRegular: 120,
    precioHoy: 89,
    promo: 26,
  },
  {
    nombre: 'Ortodoncia',
    icono: 'bi-grid-3x3-gap',
    descripcion:
      'Brackets metálicos, estéticos y alineadores invisibles para corregir la posición de tus dientes.',
    duracion: '60 min',
    precioRegular: 0,
    precioHoy: 2500,
    promo: 0,
  },
  {
    nombre: 'Blanqueamiento dental',
    icono: 'bi-stars',
    descripcion:
      'Aclaramos varios tonos el color de tus dientes de forma segura y sin sensibilidad.',
    duracion: '90 min',
    precioRegular: 450,
    precioHoy: 349,
    promo: 22,
  },
  {
    nombre: 'Implantes dentales',
    icono: 'bi-bullseye',
    descripcion:
      'Reemplazamos piezas perdidas con implantes de titanio que se ven y funcionan como dientes naturales.',
    duracion: '120 min',
    precioRegular: 0,
    precioHoy: 3200,
    promo: 0,
  },
  {
    nombre: 'Endodoncia',
    icono: 'bi-activity',
    descripcion:
      'Tratamos el nervio del diente para salvarlo y eliminar el dolor sin necesidad de extraerlo.',
    duracion: '75 min',
    precioRegular: 0,
    precioHoy: 380,
    promo: 0,
  },
  {
    nombre: 'Odontopediatría',
    icono: 'bi-emoji-smile',
    descripcion: 'Atención especial para los más pequeños en un ambiente cómodo y sin miedo.',
    duracion: '40 min',
    precioRegular: 100,
    precioHoy: 75,
    promo: 25,
  },
  {
    nombre: 'Estética dental',
    icono: 'bi-gem',
    descripcion:
      'Carillas, diseño de sonrisa y resinas estéticas para mejorar la forma y el color de tus dientes.',
    duracion: '90 min',
    precioRegular: 0,
    precioHoy: 850,
    promo: 0,
  },
  {
    nombre: 'Urgencias 24/7',
    icono: 'bi-hospital',
    descripcion: 'Te atendemos a cualquier hora ante dolor intenso, golpes o piezas rotas.',
    duracion: '30 min',
    precioRegular: 0,
    precioHoy: 150,
    promo: 0,
  },
];
