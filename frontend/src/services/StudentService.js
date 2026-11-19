
const API = "/api/students";

async function request(url, options = {}) {
  const response = await fetch(url, options);

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Something went wrong");
  }

  return result;
}

// GET ALL STUDENTS
export const getAllStudents = () => {
  return request(`${API}/getallstudents`);
};

// GET STUDENT BY ID
export const getStudentById = (id) => {
  return request(`${API}/${id}`);
};

// ADD STUDENT
export const addStudent = (student) => {
  return request(`${API}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
  });
};

// UPDATE STUDENT
export const updateStudent = (id, student) => {
  return request(`${API}/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
  });
};

// DELETE STUDENT
export const deleteStudent = (id) => {
  return request(`${API}/deletebyid/${id}`, {
    method: "DELETE"
  });
};
