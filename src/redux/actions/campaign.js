
export const FETCH_CAMPAIGN_DATA_SUCCESS = "FETCH_CAMPAIGN_DATA_SUCCESS"
export const FETCH_CAMPAIGN_DATA_FAILURE = "FETCH_CAMPAIGN_DATA_FAILURE"


export const getCampaignData = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:3000/campaign');
            if (!response.ok) {
                throw new Error('Errore nella richiesta');
            }
            const campaigndata = await response.json();
            dispatch({
                type: FETCH_CAMPAIGN_DATA_SUCCESS,
                payload: campaigndata
            });

        } catch (error) {
            dispatch({
                type: FETCH_CAMPAIGN_DATA_FAILURE,
                payload: error.message
            });
        }
    }
}