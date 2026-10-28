import { useState } from 'react'
import './App.css'

function App() {
  //const [count, setCount] = useState(0);
const number=(value)=> Number.isFinite(Number(value)) ? Number(value).toLocaleString() : '-';
const [summary, setSummary] = useState({
  total: 0,
  open: 0,
  inProgress: 0,
  resolved: 0,
  closed: 0
} );

  return (
    <main className="page">
      <header><h1>Utility conflicts</h1><p>Find the the details like tickets in a map area </p></header>
    <form className="form">
      <label className="bbox"> Bounding Box <span>minLag , minLat , MaxLang , maxLat </span>
      <input placeholder='00.00,-14.56,96.58.55' />
      </label>
      <label>Station code<input placeholder='STN001' /></label>
      <label className='radius'>Radius<input placeholder='1000' /></label>
      <button type='submit'>Submit</button>
      </form>

      <section classsName="summary">
      <Metrics title="Tickets" value={number(summary.total)} />
      <Metrics title="Open" value={number(summary.open)} />
      <Metrics title="In Progress" value={number(summary.inProgress)} />
      <Metrics title="Resolved" value={number(summary.resolved)} />
      <Metrics title="Closed" value={number(summary.closed)} />
      </section>  


      <section className="results">
        <div><div><h2>Ticket Results</h2><p>run a search for loading ticets from backend </p></div></div>
      <div><thread><tr><th>Ticket ID</th><th>Status</th><th>Description</th></tr></thread></div>
      <tbody>
        <tr><td>001</td><td>Open</td><td>Utility conflict in area 1</td></tr>
        <tr><td>002</td><td>In Progress</td><td>Utility conflict in area 2</td></tr>
        <tr><td>003</td><td>Resolved</td><td>Utility conflict in area 3</td></tr>
        <tr><td>004</td><td>Closed</td><td>Utility conflict in area 4</td></tr>
      </tbody>
      </section>
    </main>
  )
}
function Metrics({title, value}) {
  return<article ><span>{title}: {value}</span></article>};
export default App
