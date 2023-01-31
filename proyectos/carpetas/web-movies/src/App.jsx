import { MoviesGrid } from "./MoviesGrid";
import styles from "./Titulo.module.css"
export function App(){
    return (
    <div>
        <header>
            <h1 className={styles.titulo}>
                Movies
            </h1>
        </header>
        <section>
            <MoviesGrid />
        </section>
    </div>
        );
}
