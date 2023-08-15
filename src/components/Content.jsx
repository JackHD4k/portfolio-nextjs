import styles from '../styles/content.module.css';
import Cardwork from './Cardwork';

export default function Content() {
  return (
    <div className={styles.container}>
      <p className={styles.me}>
        Hola, soy estudiante y trabajo en el área de técnologias de manera profesional y autodidacta.
        <br />
        Cursando actualmente el último ciclo en la carrera de <span>Tecnologías de la información y comunicación</span> en la escuela superior de Senati.
        <br />
        Me gusta trabajar en equipo, soy social, calmado, responsable y productivo.
      </p>
      <div className={styles.cards}>
        <ol className={styles.list}>
          <li>
            <Cardwork
              date="Agosto - Septiembre 2021"
              title="Desarrollador de Software"
              company="Centro Médico - SolFarma"
              description="Desarrollé un sistema de gestión de ventas en la que se cumplió con los objetivos del cliente y poder tener un mejor control del inventario y registro de ganancias."
              tag1="C#"
              tag2="SQLite"
              tag3="Visual Studio"
            />
          </li>
          <li>
            <Cardwork
              date="Octubre - Febrero 2023"
              title="Desarrollador de Aplicaciones Web"
              company="Escuela Peruana de Paramédicos"
              description="Desarrollé una web de formulario para poder registrar las solicitudes de los clientes y que estas permanescan guardadas en una base de datos para que el personal correspondiente pueda atender las solicitudes.
              Migración de excel a una base de datos mysql y realizar el despliege a un hosting."
              tag1="ReactJS"
              tag2="MYSQL"
              tag3="ExpressJS"
            />
          </li>
        </ol>
      </div>
    </div>
  )
}