import Banner from 'components/Banner'
import Cards from 'components/Cards'
import Titulo from 'components/Titulo'
import { useFavoritoContext } from 'contexts/Favoritos';



export default function Favoritos() {
    const { favorito } = useFavoritoContext();
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <Cards lista={favorito} />
        </>
    )
}