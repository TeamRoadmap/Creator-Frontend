import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: {
    id: 1,
    isNew: false,
    imageURL: "/images/react-course.webp",
    courseName: " Basics of React",
    description:
      "A basic overview of react with some advanced topics to help you understand",
    type: "Frontend",
    lastUpdated: "12/04/12",
    tutor: "Devansh",
  },
  // contain all the courses's data in an array of object.
};
const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    getCourse: (state, action) => {
      state.courses = action.payload;
    },
    resetList: (state) => {
      return (state = []);
    },
  },
});

// export const { setUser } = userSlice.actions;
export default courseSlice.reducer;
