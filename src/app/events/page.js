export default async function page() {
   const res = await import('/data/data.json')
   const data = res.events_categories;
   return (
        <>
        <h1>Events Page</h1>
        <div>
            {data.map(event => (
                <a key={event.id} href={`/events/${event.id}`}>
                <img src={event.image} width="350px" height="350px"/>
                <h2>{event.title}</h2>
                </a>
            ))}

        </div>
        </>
    )
}
