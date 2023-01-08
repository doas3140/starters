export const sleep = (t_in_milis: number) =>
	new Promise(res => setTimeout(res, t_in_milis))
