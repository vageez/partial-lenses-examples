

const items = 200
const itemsPerPage = 50

const pagination = items => itemsPerPage => {
    pages = []
    pages.length = items / itemsPerPage
    pages.fill()

    return pages.map(( _, i )=> {

        const next = i + 2 > pages.length ? null : i+2
        const previous = i < 1 ? null : i

        return({
            next: next,
            page: i+1,
            previous: previous,
            first: 1,
            last: pages.length,
        })
    })
}

console.log(pagination(items)(itemsPerPage))