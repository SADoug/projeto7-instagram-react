const sugestoes1 = [{ usuarioimg: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você", seguir: "Seguir" },
{ usuarioimg: "assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você", seguir: "Seguir" },
{ usuarioimg: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram", seguir: "Seguir" },
{ usuarioimg: "assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você", seguir: "Seguir" },
{
    usuarioimg: "assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você", seguir: "Seguir"
}]


export default function Sidebar() {
    return (<div class="sidebar">
        <SidebarUsuario usuarioimg="assets/img/catanacomics.svg" usuariotxt="catanacomics 
Catana" />

        <div class="sugestoes">
            <SidebarTitulo titulo="Sugestões para você" divtitulo="Ver tudo" />

            {sugestoes1.map(elemento => { return <SidebarSugestoes usuarioimg={elemento.usuarioimg} nome={elemento.nome} razao={elemento.razao} seguir={elemento.seguir} /> })
            }
        </div>

        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    </div>
    )
}

function SidebarUsuario(props) {
    return (<div class="usuario">
        <img src={props.usuarioimg} />
        <div class="texto">{props.usuariotxt}
        </div>
    </div>

    )
}
function SidebarTitulo(props) {
    return (
        <div class="titulo">
            {props.titulo}
            <div>{props.divtitulo}</div>
        </div>
    )
}
function SidebarSugestoes(props) {
    return (

        <div class="sugestao">
            <div class="usuario">
                <img src={props.usuarioimg} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>
            <div class="seguir">{props.seguir}</div>
            </div>)}