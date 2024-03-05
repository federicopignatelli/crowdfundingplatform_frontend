export const FETCH_CONTRIBUTION_DATA_SUCCESS = "FETCH_CONTRIBUTION_DATA_SUCCESS"
export const FETCH_CONTRIBUTION_DATA_FAILURE = "FETCH_CONTRIBUTION_DATA_FAILURE"


export const getContributionData = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:4003/contribution/getcontributions');
            if (!response.ok) {
                throw new Error('Errore nella richiesta');
            }
            const contributiondata = await response.json();
            dispatch({
                type: FETCH_CONTRIBUTION_DATA_SUCCESS,
                payload: contributiondata
            });

            console.log(contributiondata)

        } catch (error) {
            dispatch({
                type: FETCH_CONTRIBUTION_DATA_FAILURE,
                error: error.message
            });
        }
    }
}