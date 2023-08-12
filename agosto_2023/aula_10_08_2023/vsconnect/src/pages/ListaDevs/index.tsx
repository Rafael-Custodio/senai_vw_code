import "./style.css"



function ListaDevs() {
    // Paranaues de TypeScript

    function mostrarMenu() {


        let menu = document.getElementById("menu_links") as HTMLCanvasElement; // Obtém o elemento do menu pelo ID
        let sombra: any = document.getElementById("sombra"); // Obtém o elemento da sombra pelo ID
        let menu_barras: any = document.getElementById("menu_barras"); // Obtém o elemento do botão do menu pelo ID
        let body: any = document.getElementsByTagName("body")[0]; // Obtém o elemento body (primeiro elemento)

        if (window.getComputedStyle(menu).left != "10px") { // Verifica se a propriedade 'left' do estilo computado do elemento do menu é diferente de 10px
            menu.style.left = "10px"; // Define a posição 'left' do menu como 10px movendo ele para direita
            sombra.style.right = "-10vw"; // Move a sombra para a direita
            menu_barras.setAttribute("aria-expanded", "true"); // Atualiza o atributo 'aria-expanded' para 'true'
            menu_barras.setAttribute("aria-label", "fechar menu"); // Atualiza o atributo 'aria-label' para 'fechar menu'
            body.style.overflow = "hidden"; // Define o overflow do body como "hidden" para evitar a rolagem da página
        } else {
            menu.style.left = "-300px"; // Esconde o menu deslocando-o para esquerda
            sombra.style.right = "110vw"; // Move a sombra para a esquerda para ocultá-la
            menu_barras.setAttribute("aria-expanded", "false"); // Atualiza o atributo 'aria-expanded' para 'false'
            menu_barras.setAttribute("aria-label", "abrir menu"); // Atualiza o atributo 'aria-label' para 'abrir menu'
            body.style.overflow = "auto"; // Restaura o overflow do body para o valor padrão (auto)
        }
        menu_barras.classList.toggle("ativo"); // Alterna a classe 'ativo' no botão do menu
    }

    return (
        <>
            <main id="lista-servicos">
                <div className="container container_lista_devs">
                    <div className="lista_devs_conteudo">
                        <h1>Lista de Devs</h1>
                        <hr />
                        <form method="post">
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar desenvolvedores</label>
                                <div className="campo-label">
                                    <input
                                        type="search"
                                        name="campo-busca"
                                        id="busca"
                                        placeholder="Buscar desenvolvedores por tecnologias..."
                                    />
                                    <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                                <li>
                                    <div className="dev">
                                        <div className="grupo_contato">
                                            <img src="https://github.com/Thiago-Nascimento.png" alt="" />
                                            <div className="contato_dev">
                                                <h3>Thiago Nascimento</h3>
                                                <p>thiago@email.com</p>
                                            </div>
                                        </div>
                                        <div className="techs">
                                            <span>HTML</span>
                                            <span>CSS</span>
                                            <span>React</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="dev">
                                        <div className="grupo_contato">
                                            <img src="https://github.com/JessicaSanto.png" alt="" />
                                            <div className="contato_dev">
                                                <h3>Jessica Franzon</h3>
                                                <p>jessica@email.com</p>
                                            </div>
                                        </div>
                                        <div className="techs">
                                            <span>HTML</span>
                                            <span>CSS</span>
                                            <span>React</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="dev">
                                        <div className="grupo_contato">
                                            <img src="https://github.com/odirlei-assis.png" alt="" />
                                            <div className="contato_dev">
                                                <h3>Odirlei Sabella</h3>
                                                <p>odirlei@email.com</p>
                                            </div>
                                        </div>
                                        <div className="techs">
                                            <span>HTML</span>
                                            <span>CSS</span>
                                            <span>React</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="dev">
                                        <div className="grupo_contato">
                                            <img src="https://github.com/alexiamelhado18.png" alt="" />
                                            <div className="contato_dev">
                                                <h3>Aléxia Vitória</h3>
                                                <p>alexia@email.com</p>
                                            </div>
                                        </div>
                                        <div className="techs">
                                            <span>HTML</span>
                                            <span>CSS</span>
                                            <span>React</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default ListaDevs
