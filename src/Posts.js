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
export default function Posts(){return(
<div class="posts">
<div class="post">
    <PostTopo usuarioimg="assets/img/meowed.svg" usuario="meowed" acoes="ellipsis-horizontal" />
    <PostConteudo conteudo=" assets/img/gato-telefone.svg" />
    <PostFundo acoes1="heart-outline" acoes2="chatbubble-outline" acoes3="paper-plane-outline" acoes4="bookmark-outline" curtidasimg="assets/img/respondeai.svg" curtidastxt="Curtido por respondeai e outras 101.523 pessoas"/>
</div>
<div class="post">
    <PostTopo usuarioimg="assets/img/barked.svg" usuario="barked" acoes="ellipsis-horizontal" />
    <PostConteudo conteudo="assets/img/dog.svg" />
    <PostFundo acoes1="heart-outline" acoes2="chatbubble-outline" acoes3="paper-plane-outline" acoes4="bookmark-outline" curtidasimg="ts/img/adorable_animals.svg" curtidastxt="Curtido por adorable_animalse outras 99.159 pessoas" />
</div>
</div>)}
