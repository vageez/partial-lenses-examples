import axios from "axios";
import { Maybe, Nothing } from 'pratica'

const True  = () => true
const isTrue = b => Maybe(b).chain(b => b > 3 ? Maybe(b) : Nothing)
var getToDo = n => axios.get(`https://jsonplaceholder.typicode.com/todos/${n}`)

getToDo(1)
.then(r => getToDo(2))
.then(r => getToDo('a'))
.then(r => console.log(r))
.catch(err =>
    True() ? 
        getToDo(3)
        // .catch(err => console.log(`Catch 1 : ${err}`))
        .then(_ => isTrue(4).cata({
                Just: r => getToDo('a'),
                Nothing: () => Promise.reject(),
            })
        )
        // .catch(err => console.log(`Catch 2 : ${err}`))
        : console.log(`Error Catch : ${err}`)
)
.then(r => console.log(r))
.catch(err => console.log(`Final Catch : ${err}`)) //?