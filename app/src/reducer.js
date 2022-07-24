export default function reducer(state, action) {
  switch (action.type) {
    case "JOINED":
      return {
        ...state,
        joined: true,
        userName: action.payload.userName,
        roomId: action.payload.roomId,
      };
    default:
      return state;
  }
}
// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// }
