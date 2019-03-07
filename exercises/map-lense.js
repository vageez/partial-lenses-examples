import { get, find, defaults } from 'partial.lenses'
import { taggedSum } from 'daggy'


const response = {
    vip_details: {
        vip_earned: [
            {
                earned_date: "2019-01-14T19:44:58.160299",
                program: "Calendar 2017"
            },            
            {
                earned_date: "2019-01-14T19:44:58.160299",
                program: "Calendar 2017-2018"
            }
        ]
    }
}

const FIP = 'Calendar 2017'
const VIP = 'Calendar 2017-2018'

const UserVipStatus = taggedSum('userVipStatus', {
    Earned: [],
    NotEarned: [],
    FIP: [],
})

const StatusMap = {
    'Calendar 2017' : UserVipStatus.FIP,
    'Calendar 2017-2018': UserVipStatus.Earned,
    'Regular': UserVipStatus.NotEarned,
}

const checkUserStatus = get(['vip_details', 'vip_earned', 0, 'program']) //?

checkUserStatus(response) //?

// StatusMap[checkUserStatus(response)].toString() //?