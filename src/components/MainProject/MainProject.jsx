import "./MainProject.css";

export default function MainProject() {
  return (
    <section className="main-project">
      <h1>Meu principal projeto</h1>
      <h2>
        <a href="https://getsongs.up.railway.app/" target="blank">
          GetSongs - Serviço de montagem automática de hinários.
        </a>
      </h2>
      <div className="description">
        <p>
          A plataforma GetSongs foi criado com a intenção de tornar a montagem
          de hinários mais fácil e rápida. A ideia surgiu a partir da
          experiência do seu criador, Lucas Rocha, em igrejas e outras
          organizações religiosas, onde era comum encontrar dificuldades para
          criar hinários personalizados para eventos, missas, entre outros. Além
          disso, com a ajuda da tecnologia, o GetSongs foi desenvolvido com uma
          abordagem inovadora para a montagem de hinários, com foco na
          praticidade e facilidade de uso, já que convencionalmente todo o
          processo para a confecção destes hinários é manual.
        </p>
        <p>
          Para criar a aplicação, foram utilizados o framework Django e Django
          REST Framework para construção do back-end e Bootstrap 4 para o
          front-end. Django é um framework em Python, conhecido por sua
          facilidade de uso, segurança e escalabilidade, sendo amplamente
          utilizado no desenvolvimento web. Já o Bootstrap é um framework
          front-end que permite a criação de interfaces responsivas e elegantes,
          com uma ampla variedade de recursos e componentes.
        </p>
        <p>
          Em resumo, o GetSongs é o resultado do trabalho e dedicação do seu
          criador como primeiro projeto full-stack, tornando a montagem de
          hinários mais fácil e acessível para todos. Com tecnologias confiáveis
          e modernas, a plataforma oferece uma solução inovadora para a criação
          de hinários personalizados para eventos religiosos e outras ocasiões.
        </p>
        <p>
          O serviço é especialmente projetado para ajudar músicos católicos a
          criar hinários personalizados com facilidade. Se você está procurando
          um hinário para um casamento, batizado, missa ou outro evento, o
          GetSongs é a escolha perfeita. Nosso compromisso de oferecer uma
          experiência de montagem de hinário fácil, rápida e conveniente para
          todos os tipos de eventos e ocasiões.
        </p>
        <p>
          ocê pode montar seu hinário escolhendo entre uma ampla variedade de
          músicas disponíveis em nossa biblioteca e personalizá-lo de acordo com
          as suas necessidades. Além disso, nossa equipe está sempre atualizando
          a biblioteca com as últimas músicas e tendências, para garantir que
          você tenha acesso às músicas mais recentes e populares.
        </p>
        <p>
          Após finalizar a montagem do hinário, o GetSongs pode, com apenas um
          clique, exportar automaticamente um documento em formato PDF com todas
          as letras das músicas na sequência estabelecida e com as configurações
          definidas pelo usuário. Isso significa que você pode ter acesso a seu
          hinário personalizado a qualquer momento, em qualquer lugar e em
          qualquer dispositivo, permitindo que você compartilhe seu hinário com
          facilidade.
        </p>
        <p>
          Portanto, se você precisa de um hinário para uma ocasião especial, o
          GetSongs é a escolha perfeita. Obrigado por escolher o GetSongs.
          Experimente já nosso serviço e veja como é fácil criar seu próprio
          hinário personalizado.
        </p>
      </div>
    </section>
  );
}
