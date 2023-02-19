import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]);

    return (
        <FavoritosContext.Provider value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext() {
    const { favorito, setFavorito } = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito) {
        // Adiciona um novo favorito à lista, caso ele não exista nessa lista.
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);
        if(!favoritoRepetido) return setFavorito([...favorito, novoFavorito])
        // Remove o favorito da lista, no caso dele já exisir na lista e essa função seja chamada
        return setFavorito(favorito.filter(item => item.id !== novoFavorito.id))
    }
    return {
        favorito,
        adicionarFavorito
    }
}

