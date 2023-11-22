export default async function Home() {
  const {events_categories} = await import('/data/data.json')
 return (
    <>
      <header>
        <nav>
          <img />
          <a href='/'>Home</a>
          <a href='/events'>Events</a>
          <a href='/about-us'>About Us</a>
        </nav>
      </header>

      <main>
        {events_categories.map(event => <a key={event.id} href={`/events/${event.id}`}> 
        <img src={event.image} width="350px" height="350px"/>
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        </a>)}
        
      </main>

      <footer>
        <p>©️ 2022 Time to Code - A Project</p>
      </footer>
    </>
  )
} 

