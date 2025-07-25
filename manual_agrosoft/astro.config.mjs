import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  server: {
    port: 4322
  },
  integrations: [
    starlight({
      title: 'Agrosis',
      description: "Documentación de la api Agrosis",
      social: {
        github: 'https://github.com/angela1705/ApiAgrosoftProyecto',
      },
      logo: {
        src: "/public/logo.png", 
        alt: "Mi Logo",
      },
      customCss: ['./src/estilos/logo.css'],
      sidebar: [
        {
          label: 'Introducción',
          items: [
            { label: 'introduccion', slug: 'guides/intro' },
            { label: 'Instalación', slug: 'guides/install' },
          ],
        },
        {
          label: 'Usuarios',
          items: [
            { label: 'Introducción', slug: 'modules/usuarios/index' },
            { label: 'usuarios', slug: 'modules/usuarios/usuarios' },
            { label: 'Log-in', slug: 'modules/usuarios/Log-in' },
            { label: 'Administrar perfil', slug: 'modules/usuarios/adminstrarPerfil' },
            { label: 'Administrar usuarios', slug: 'modules/usuarios/adminstrarUsuarios' },
            


          ],
        },
        {
          label: 'Navegación',
          items: [
            { label: 'Navegacion', slug: 'modules/navegacion/index' },
           
          ],
        },
        {
          label: 'Trazabilidad del Cultivo',
          items: [
            // { label: 'Introducción', slug: 'modules/trazabilidad/index' },
            { label: 'Lotes', slug: 'modules/trazabilidad/lotes' },
            { label: 'Bancales', slug: 'modules/trazabilidad/bancal' },
            { label: 'Tipo de Especie', slug: 'modules/trazabilidad/tipoespecie' },
            { label: 'Especie', slug: 'modules/trazabilidad/especie' },
            { label: 'Cultivo', slug: 'modules/trazabilidad/cultivo' },
            { label: 'Tipo de actividad', slug: 'modules/trazabilidad/tipoactividad' },
            { label: 'Actividad', slug: 'modules/trazabilidad/actividad' },
            { label: 'Cosecha', slug: 'modules/trazabilidad/cosecha' },
            { label: 'Tipo de plaga', slug: 'modules/trazabilidad/tipoplaga' },
            { label: 'Tipo de Control', slug: 'modules/trazabilidad/tipoControl' },
            { label: 'Control', slug: 'modules/trazabilidad/control' },
            { label: 'Residuos', slug: 'modules/trazabilidad/Gestión.de-Residuos' },     
            { label: 'Plaga', slug: 'modules/trazabilidad/plaga' },
            { label: 'Afecciones', slug: 'modules/trazabilidad/afecciones' },
            // { label: 'Control de Productos', slug: 'modules/trazabilidad/productoscontrol' },



          ],
        },
        {
          label: 'Inventario',
          items: [
            { label: 'Introducción', slug: 'modules/inventario/index' },
            { label: 'Bodega', slug: 'modules/inventario/bodega' },
            { label: 'Herramientas', slug: 'modules/inventario/herramientas' },
            { label: 'Insumos', slug: 'modules/inventario/insumos' },
            { label: 'Bodega Herramienta', slug: 'modules/inventario/bodega_herramienta' },
            { label: 'Bodega Insumo', slug: 'modules/inventario/bodega_insumo' },
            { label: 'Productos', slug: 'modules/inventario/precio_producto' },
          ],
        },
        {
          label: 'Finanzas',
          items: [
            // { label: 'Panel de Finanzas', slug: 'modules/finanzas/index' },
            { label: 'Gestión de Pagos', slug: 'modules/finanzas/pagos' },
            { label: 'Gestión de Salario', slug: 'modules/finanzas/salarios' },
            { label: 'Gestión de Ventas', slug: 'modules/finanzas/ventas' },
            { label: 'Gestión de Costo-Beneficio', slug: 'modules/finanzas/Costo-Beneficio' },
          ],
        },
        {
          label: 'IoT (Sensores)',
          items: [
            { label: 'Introducción', slug: 'modules/IoT/index' },
            { label: 'Gestión de Sensores', slug: 'modules/IoT/sensores' },
            { label: 'Datos Meteorológicos', slug: 'modules/IoT/datos-meteorologicos' }, 
            { label: 'Datos Meteorológicos', slug: 'modules/IoT/sensores-en-tiemporeal' }, 
          ],
        },
        {
          label: 'Diagrama de funcionalidad del proyecto ',
          items: [
            { label: 'Introducción', slug: 'modules/diagramas/index' },
            { label: 'Diagramas del proyecto', slug: 'modules/diagramas/diagramas_proyecto' },
          ],
        },
        {
          label: 'Configuracion Tecnica del proyecto ',
          items: [
            { label: 'Introducción', slug: 'modules/Configuracion_Tecnica/index' },
            { label: 'Configuracion tecnica del proyecto', slug: 'modules/Configuracion_Tecnica/configuracion_y_Bases_datos' },
            { label: 'Especificacion de Requerimientos', slug: 'modules/Configuracion_Tecnica/especificacion_requerimiento' },
            { label: 'Planteamiento del Problema', slug: 'modules/Configuracion_Tecnica/Planteamiento_del_Problema' },          
            { label: 'Prototipado del sistema', slug: 'modules/Configuracion_Tecnica/prototipado_del_sistema' },


          ],
        },
      ],
    }),
  ],
});
