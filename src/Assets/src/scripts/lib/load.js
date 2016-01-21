/**
 * Created by n0m4dz on 1/19/16.
 */

export function load() {
    return (dispatch, getState) => {
        const state = getState()
        if (getUser(state)) return null;

        get()
            .then((response) => {
                dispatch({
                    type: AppConstants.USER_LOAD_SUCCESS,
                    payload: {
                        response
                    }
                });
            });
    }
}