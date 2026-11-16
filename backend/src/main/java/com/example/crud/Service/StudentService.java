package com.example.crud.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.crud.Dto.StudentDto;
import com.example.crud.Entity.Student;
import com.example.crud.Exception.StudentNotFoundException;
import com.example.crud.Repository.StudentRepository;

@Service
public class StudentService {
	private StudentRepository studentrepository;
	
	public  StudentService(StudentRepository studentrepository) {
		this.studentrepository=studentrepository;
	}
	public Student createstudent(StudentDto studentdto) {
		Student student=new Student();
		student.setName(studentdto.getName());
		student.setEmail(studentdto.getEmail());
		student.setCourse(studentdto.getCourse());
		return studentrepository.save(student);
	}
	
	public List<Student> getallstudents()
	{
		return studentrepository.findAll();
	}
	
	public Student getbyid(Long id) {
		
		return studentrepository.findById(id).orElseThrow(()->new StudentNotFoundException("student with id not found : "+id));
		
	}
	public Student updatebyid(long id,StudentDto dto) {
		Student student=studentrepository.findById(id).orElseThrow(()-> new StudentNotFoundException("student with id not found : "+id));
	student.setName(dto.getName());
	student.setEmail(dto.getEmail());
	student.setCourse(dto.getCourse());
	return studentrepository.save(student);
}
	
	public String deletebyid(long id) {
		Student student=studentrepository.findById(id).orElseThrow(()-> new StudentNotFoundException("student with id not found : "+id));
		 studentrepository.delete(student);
		 return " deleted student with id : "+id;
	}
}