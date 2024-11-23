

import { useState } from 'react';


function App() {
    console.log('123')
    const [myData, setMyData] = useState(11)

    return (
        <div><div>
            {myData}
        </div>
            <button onClick={() => setMyData(`${myData}1`)}>+</button>
            </div>
    );
}

export default App;
