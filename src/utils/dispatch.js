export const notification = (dispatch, message) => {
  dispatch({
    type: "set_notification",
    payload: { message, show: true },
  })
}
export const showInsultModal = (dispatch, type, insultId, defaultGame) => {
  dispatch({
    type: "set_insult_modal",
    payload: { type, show: true, insultId, defaultGame },
  })
}

export const hideInsultModal = (dispatch) => {
  dispatch({
    type: "set_insult_modal",
    payload: { show: false },
  })
}
