export default async function page({params}) {
    console.log(params.category);
    const { allEvents } = await import('/data/data.json')
    const data = allEvents.filter(ev => ev.city == params.category)
    
    return (
        <>
        <h1>Events in {params.category}</h1>
        {data.map(events => (<a key={events.id} href={`/events/${events.city}/${events.id}`}>
        <img src={events.image} width="350px" height="350px"/>
        <h2>{events.title}</h2>
        <p>{events.description}</p>
        </a>))}
        </>
    )
}

export async function generateStaticParams(){
    const {events_categories} = await import('/data/data.json')
    return events_categories.map(ev =>({
            params: {category: ev.id.toString()}
    }))
}