import axios from 'axios'
import { useState } from 'react'
import '../App.css'

function Home() {
    const [q , setQ] = useState(``)
    const [songsFound , setSongsFound] = useState([])
    function searchSongWithLyrics() {
        const options = {
            method: 'GET',
            url: 'https://genius-song-lyrics1.p.rapidapi.com/search/',
            params: {
              q: q,
              per_page: '20',
              page: '1'
            },
            headers: {
              'X-RapidAPI-Key': '80724f07f0msh7625ce68ef3a5b7p1ece7bjsna91097439c30',
              'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
            }
          };
          axios.request(options)
          .then(res => res.data)
          .then(data => {
            setSongsFound(data.hits)
            console.log(data);
          })
    }
    return (
        <>
            <div className="">
                <input type="text" value={q} placeholder='lyrics search' onChange={(e) => setQ(e.currentTarget.value)} />
                <button onClick={() => searchSongWithLyrics()}>Search</button>
            </div>
            <div className="">
                {/* {songsFound}
                {typeof songsFound} */}
                    <div className="songBox">
                {songsFound && songsFound.map((song:any, index:number) => {
                    return <div key={index} className="songMBox">
                        <div className="songSmBox">
                            <h3>
                                {song.result.title} - {song.result.artist_names}
                            </h3>
                        </div>
                        <div className="songSmBox">
                            <img src={song.result.song_art_image_thumbnail_url} alt="" />
                        </div>
                        <div className="songSmBox">
                            <button onClick={() => open(song.result.url,`_blank`)}>Gunius</button>
                        </div>
                    </div>
                })}
                </div>
            </div>
        </>
    )
}

export default Home