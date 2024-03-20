import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">

      <h1 className="head_text text-center">
        Os piores apartamentos
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center">para não se alugar</span>
      </h1>
      <p className="desc text-center">
        Pesquise, publique e <b>não</b> alugue apartamentos problemáticos baseado em reviews 100% humanos e poupe sua sanidade mental.
      </p>

      <Feed/>
    </section>
  )
}

export default Home