const asyncHandler = require("express-async-handler");
const {
  getAllStudents,
  addNewStudent,
  getStudentDetail,
  setStudentStatus,
  updateStudent,
  deleteStudentById,
} = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
  //write your code
  const { name, className, section, roll } = req.query;
  const students = await getAllStudents({ name, className, section, roll });
  res.json({ students });
});

const handleAddStudent = asyncHandler(async (req, res) => {
  //write your code
  const payload = req.body;
  const message = await addNewStudent(payload);
  res.json(message);
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
  //write your code
  const { id } = req.params;
  const payload = req.body;
  const message = await updateStudent({ ...payload, userId: id });
  res.json(message);
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
  //write your code
  const { id } = req.params;
  const student = await getStudentDetail(id);
  res.json(student);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
  //write your code
  const payload = req.body;
  const { id: userId } = req.params;
  const { id: reviewerId } = req.user;
  const student = await setStudentStatus({ userId, reviewerId, ...payload });
  res.json(student);
});

module.exports = {
  handleGetAllStudents,
  handleGetStudentDetail,
  handleAddStudent,
  handleStudentStatus,
  handleUpdateStudent,
};
