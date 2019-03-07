import { get, find, defaults } from 'partial.lenses'

const payloadNothingEarned = {
    vip_details: {
        vip_earned: []
    }
}

const payloadForYearOneVIP = {
    vip_details: {
        vip_earned: [
            {
                program: 'Calendar 2017'
            }
        ]
    }
}

const payloadForYearTwoVIP = {
    vip_details: {
        vip_earned: [
            {
                program: 'Calendar 2017-2018'
            }
        ]
    }
}

const payloadForBothVIP = {
    vip_details: {
        vip_earned: [
            {
                program: 'Calendar 2017'
            },
            {
                program: 'Calendar 2017-2018'
            }
        ]
    }
}

const isMatch = match => get(['vip_details', 'vip_earned', find(({program}) => program === match), 'program', defaults(false)])
const FIP = 'Calendar 2017'
const VIP = 'Calendar 2017-2018'

const decideStudioType = payload => isMatch(VIP)(payload) ? 'Daggy.VIP' : isMatch(FIP)(payload) ? 'Daggy.FIP' : 'Daggy.RegularStudio'

console.log('payloadNothingEarned: ', decideStudioType(payloadNothingEarned)) // // Daggy.Regular
console.log('payloadForYearOneVIP: ', decideStudioType(payloadForYearOneVIP)) // Daggy.FIP
console.log('payloadForYearTwoVIP: ', decideStudioType(payloadForYearTwoVIP)) // Daggy.VIP
console.log('payloadForBothVIP: ', decideStudioType(payloadForBothVIP)) // Daggy.VIP







{
'Calendar 2017'
'Calendar 2017-2018'
}

