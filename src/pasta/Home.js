import React from "react";
function Home() {
    return (
        <div className="home-app">

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"></link>

            <div className="perfil" >

                <p className="nome1">Instagrão</p>

                <div className="n5" ><i class="bi bi-house-door-fill"></i> Pagina inicial</div>
                <div className="n5" ><i class="bi bi-search"></i> Pesquisa</div>
                <div className="n5" ><i class="bi bi-compass"></i>  Explorar</div>
                <div className="n5" ><i class="bi bi-camera-reels"></i> Reels </div>
                <div className="n5" ><i class="bi bi-chat-dots"></i> Mensagem</div>
                <div className="n5" ><i class="bi bi-heart"></i> Notificação</div>
                <div className="n5" ><i class="bi bi-plus-square"></i> Criar</div>
                <div className="n5" ><i class="bi bi-person-circle"></i> Perfil</div>
                <div className="n51" ><i class="bi bi-list"></i> Mais</div>
            </div>

            <div className="barra" ></div>


            <div className="primeiropost">

                <div className="post">
                    <p className="gatinho" ><i class="bi bi-person-square"></i><span className="kl" >Gatinho_do_gera</span></p>
                </div>
                <div ><img className="foto" src="https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia24819/gatos-escondem-pratos-comida-dicas-cursos-cpt.jpg"></img></div>
                <div className="icon">
                    <i class="bi bi-heart"></i>
                    <i class="bi bi-chat-dots"></i>
                    <i class="bi bi-send"></i>
                    <span className="salva" ><i class="bi bi-bookmark"></i></span>

                </div>

                <div className="post">
                    <p className="gatinho" ><i class="bi bi-person-square"></i><span className="kl" >Gatinho_fofinho</span></p>
                </div>
                <div ><img className="foto" src="https://blog-static.petlove.com.br/wp-content/uploads/2019/06/shutterstock_632318627.jpg"></img></div>
                <div className="icon">
                    <i class="bi bi-heart"></i>
                    <i class="bi bi-chat-dots"></i>
                    <i class="bi bi-send"></i>
                    <span className="salva" ><i class="bi bi-bookmark"></i></span>

                </div>
                

            </div>











        </div>
    )

}

export default Home;