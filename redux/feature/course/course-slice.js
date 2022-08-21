import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  course: [],
  courseId: "",
  editorSection: "",
  // contain all the courses's data in an array of object.
};
const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    getCourse: (state, action) => {
      state.course = action.payload;
    },
    setCourseId: (state, action) => {
      state.courseId = action.payload;
    },
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    setSection: (state, action) => {
      state.editorSection = action.payload;
    },
    setEditorSectionContent: (state, action) => {
      state.editorSection.content = action.payload;
    },
    resetList: (state) => {
      return (state = []);
    },
  },
});

// export const { setUser } = userSlice.actions;
export default courseSlice.reducer;
