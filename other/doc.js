import { assign, get, elems, identity, defaults, collect, when, keys, ifElse, index} from 'partial.lenses'


const documents = [
    {
        id: 9,
        // isConsent: true,
        // isConfirmed: false,
    },
    {
        id: 9,
        isConsent: true,
        isConfirmed: false,
    }
]


const isConsentNullOrAccepted = documents => {
	const consent = getConsentDocument(documents)
	return !consent || consent.isConfirmed
}

const getConsentDocument = documents => {
  return documents.find(({ isConsent }) => {
    return isConsent
  })
}


const isSideBarVisible = isConsentNullOrAccepted(documents)

isSideBarVisible

const isConfirmed = get(['isConfirmed'])


get([
    elems,
    ifElse(x => x.isConsent,
        get(['isConfirmed']),
        _ => true
    ),
], documents) //?

// Is Unconfirmed Consent Doc
get([
    index(0),
    ifElse(x => x.isConsent && !x.isConfirmed,
        _ => true,
        _ => false,
    ),
], documents) //?
// get(['isConfirmed', defaults(false)])