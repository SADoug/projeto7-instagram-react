import Stories from "./Stories.js" 
import Posts from "./Posts.js"
import Sidebar from "./Sidebar.js"

export default function Conteudo() {
    return (<div class="corpo">
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
        <Sidebar />
        </div>
  
    )
}
