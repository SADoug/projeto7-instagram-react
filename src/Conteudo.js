export default function Conteudo() {
    return (<div class="corpo">
        <div class="esquerda">
            <div class="stories">
                <StoryItem img="assets/img/9gag.svg" usuario="9gag" />
                <StoryItem img="assets/img/meowed.svg" usuario="meowed" />
                <StoryItem img="assets/img/barked.svg" usuario="barked" />
                <StoryItem img="assets/img/nathanwpylestrangeplanet.svg" usuario="nathanwpylestrangeplanet" />
                <StoryItem img="assets/img/wawawicomics.svg" usuario="wawawicomics" />
                <StoryItem img="assets/img/respondeai.svg" usuario="respondeai" />
                <StoryItem img="assets/img/filomoderna.svg" usuario="filomoderna" />
                <StoryItem img="assets/img/memeriagourmet.svg" usuario="memeriagourmet" />

                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>

            <div class="posts">
                <div class="post">
                    <PostTopo usuarioimg="assets/img/meowed.svg" usuario="meowed" acoes="ellipsis-horizontal" />
                    <PostConteudo conteudo=" assets/img/gato-telefone.svg" />
                    <PostFundo acoes1="heart-outline" acoes2="chatbubble-outline" acoes3="paper-plane-outline" acoes4="bookmark-outline" curtidasimg="assets/img/respondeai.svg" curtidastxt="Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>" />
                </div>
                <div class="post">
                    <PostTopo usuarioimg="assets/img/barked.svg" usuario="barked" acoes="ellipsis-horizontal" />
                    <PostConteudo conteudo="assets/img/dog.svg" />
                    <PostFundo acoes1="heart-outline" acoes2="chatbubble-outline" acoes3="paper-plane-outline" acoes4="bookmark-outline" curtidasimg="ts/img/adorable_animals.svg" curtidastxt="Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>" />
                </div>
            </div>
        </div>

        <div class="sidebar">
            <SidebarUsuario usuarioimg="assets/img/catanacomics.svg" usuariotxt="catanacomics Catana" />

            <SidebarTitulo titulo="Sugestões para você" divtitulo="Ver tudo" />
            <SidebarSugestoes usuarioimg="assets/img/bad.vibes.memes.svg" nome="bad.vibes.memes" razao="Segue você" seguir="Seguir" />
            <SidebarSugestoes usuarioimg1="assets/img/chibirdart.svg" nome1="chibirdart" razao1="Segue você" seguir1="Seguir" />
            <SidebarSugestoes usuarioimg2="assets/img/razoesparaacreditar.svg" nome2="razoesparaacreditar" razao2="Novo no Instagram" seguir2="Seguir" />
            <SidebarSugestoes usuarioimg3="assets/img/adorable_animals.svg" nome3="adorable_animals" razao3="Segue você" seguir3="Seguir" />
            <SidebarSugestoes usuarioimg4="assets/img/smallcutecats.svg" nome4="smallcutecats" razao4="Segue você" seguir4="Seguir" />

       

        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
        </div>
        </div>
  
    )
}

function StoryItem(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.img} />
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>
    )
}
function PostTopo(props) {
    return (<div class="topo">
        <div class="usuario">
            <img src={props.usuarioimg} />
            {props.usuario}
        </div>
        <div class="acoes">
            <ion-icon name={props.acoes}></ion-icon>
        </div>
    </div>)
}
function PostConteudo(props) {
    return (
        <div class="conteudo">
            <img src={props.conteudo} />
        </div>
    )
}

function PostFundo(props) {
    return (<div class="fundo">
        <div class="acoes">
            <div>
                <ion-icon name={props.acoes1}></ion-icon>
                <ion-icon name={props.acoes2}></ion-icon>
                <ion-icon name={props.acoes3}></ion-icon>
            </div>
            <div>
                <ion-icon name={props.acoes1}></ion-icon>
            </div>
        </div>

        <div class="curtidas">
            <img src={props.curtidasimg} />
            <div class="texto">
                {props.curtidastxt}
            </div>
        </div>
    </div>)
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
    return (<div class="sugestoes">
        <div class="titulo">
            {props.titulo}
            <div>{props.divtitulo}</div>
        </div>
    </div>)
}
function SidebarSugestoes(props) {
    return (
        <div class="sugestoes">
            <div class="sugestao">
                <div class="usuario">
                    <img src={props.usuarioimg} />
                    <div class="texto">
                        <div class="nome">{props.nome}</div>
                        <div class="razao">{props.razao}</div>
                    </div>
                </div>

                <div class="seguir">{props.seguir}</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src={props.usuarioimg1} />
                    <div class="texto">
                        <div class="nome">{props.nome1}</div>
                        <div class="razao">{props.razao1}</div>
                    </div>
                </div>

                <div class="seguir">{props.seguir1}</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src={props.usuarioimg2} />
                    <div class="texto">
                        <div class="nome">{props.nome2}</div>
                        <div class="razao">{props.razao2}</div>
                    </div>
                </div>

                <div class="seguir">{props.seguir2}</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src={props.usuarioimg3} />
                    <div class="texto">
                        <div class="nome">{props.nome3}</div>
                        <div class="razao">{props.razao3}</div>
                    </div>
                </div>

                <div class="seguir">{props.seguir3}</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src={props.usuarioimg4} />
                    <div class="texto">
                        <div class="nome">{props.nome4}</div>
                        <div class="razao">{props.razao4}</div>
                    </div>
                </div>

                <div class="seguir">{props.seguir4}</div>
            </div>
        </div>)
}

function FundoMobile() {
    return (<div class="fundo-mobile">
        <ion-icon name="home"></ion-icon>
        <ion-icon name="search-outline"></ion-icon>
        <ion-icon name="add-circle-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
    </div>
    )
}

