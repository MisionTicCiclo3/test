import CardRazasPerros from "components/CardRazasPerros";
import borderCollie from "media/border collie.jpg";
import loboSiberiano from "media/lobo_siberiano.jpg";

function Index() {
  return (
    <div>
      <main>
        <section>
          <h1>Razas de Perros</h1>
          <ul className="breedcardcontainer">
            <CardRazasPerros
              nombreRaza="Border Collie"
              imagen={borderCollie}
              link="/BorderCollie"
            />
            <CardRazasPerros
              nombreRaza="Lobo Siberiano"
              imagen={loboSiberiano}
              link="/Lobosiberiano"
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Index;
