import { taggedSum } from "daggy"


const Maybe = taggedSum('Maybe', {
    Just : ['url'],
    Nothing : ['url'],
})

const payload = {
    isLoyalty : true,
    quickProfileComplete : true,
    earnedProfileBadge : false,
    styleSurveyComplete : true,
}

// Current Implementation
export const currentloyaltyStep = payload => 
payload.isLoyalty ?
  payload.quickProfileComplete ? 
    payload.styleSurveyComplete && payload.earnedProfileBadge 
    ? Maybe.Just('studio') : Maybe.Just('stylesurvey')
    : Maybe.Just('quick-profile')
  : Maybe.Just('upgrade-account') 


export const loyaltyStep = payload => 
    payload.isLoyalty ? 
        payload.quickProfileComplete ? 
                !payload.earnedProfileBadge ? 
                    payload.styleSurveyComplete ?  
                        Maybe.Just('studio') : Maybe.Just('stylesurvey')
                : Maybe.Just('studio')                 
            : Maybe.Just('quick-profile')
    : Maybe.Just('upgrade-account')   



loyaltyStep(payload) //?