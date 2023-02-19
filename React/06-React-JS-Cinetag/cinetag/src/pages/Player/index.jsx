import Banner from "components/Banner";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import NaoEncontrada from "pages/NaoEncontrada";
import { useEffect, useState } from "react";

export default function Player() {
    const [video, setVideo] = useState(false);
    const parametros = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/monicahillman/cinetag-api/videos?id=${parametros.id}`)
        .then(respsota => respsota.json())
        .then(dados => {
            setVideo(...dados)
        })
    }, [parametros.id])

    if(!video) {
        return <NaoEncontrada />
    }

    return (
        <>
            <Banner imagem='player' />
            <Titulo>
                <h1>Player </h1>
            </Titulo>
            <section style={{ height: "80vh" }}>
                <iframe 
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </section>
        </>
    )
}