"use client"

import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"

export default function Page() {
    return <div>
        <h1>Next JS example</h1>

        <div class="buttons">
            <CountButton increment={1} size={.5} color="blue"/>
            <CountButton increment={2} size={.5} color="red"/>
        </div>

        <hr />

        <p>My <a href="https://github.com/JasHruska406/NextJS">github repository</a>!</p>
        
        <hr />
        
        <SearchBar />
    </div>
}