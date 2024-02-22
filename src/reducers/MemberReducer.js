import {
  MEMBERS_FETCH,
  MEMBER_FETCH,
  MEMBER_CREATE,
  MEMBER_UPDATE,
} from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case MEMBERS_FETCH:
    case MEMBER_FETCH:
      return action.payload;
    case MEMBER_CREATE:
      return { saved: true, msg: "บันทึกสมาชิกเรียบร้อย" };
    case MEMBER_UPDATE:
      return { ...state, saved: true, msg: "บันทึกสมาชิกเรียบร้อย" };
    default:
      return state;
  }
}
