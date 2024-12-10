//import './css/bulma2.css';
import Header from './Header.js';
import CreateList from './CreateList.js';

const fruit=["Apple", "Pear", "Orange"];
const veg=["Swede", "Kale", "Turnip"];

function App () {
    return(
    <>
        <Header />
        <div class="columns">
            <div class="column">
                <CreateList title="Fruits" items={fruit} style="is-warning" />
            </div>
            <div class="column">
                <CreateList title="Vegetables" items={veg} style="is-danger" />
            </div>
        </div>
    </>
    );
}

export default App;
