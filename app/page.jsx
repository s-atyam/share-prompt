import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover and Share
            <br className="min-md:hidden"/>
            <span className="blue_gradient text-center">AI Prompts</span>
        </h1>
        <p className="desc text-center">
            Discover Muse is an open-source prompting tool for modern world to discover, create and share creative AI prompts
        </p>
        <Feed/>
    </section>
  )
}

export default Home
