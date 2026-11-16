package com.example.crud.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.crud.Dto.StudentDto;
import com.example.crud.Entity.Student;
import com.example.crud.Service.StudentService;
@CrossOrigin(origins = "http://localhost:5174")
@RestController
@RequestMapping("students")
public class StudentController {
	
	private StudentService service;
	
	public StudentController(StudentService service) {
		this.service=service;
	}
	
	
	@PostMapping("/add")
	public ResponseEntity<ResponseStructure<Student>> createstudent(@RequestBody StudentDto studentdto) {
		Student student=service.createstudent(studentdto);
		ResponseStructure <Student> response= new ResponseStructure<>(201,"student added successfully",student);
		return new ResponseEntity<>(response,HttpStatus.CREATED);
	}
	
	
	@GetMapping("/getallstudents")
	public ResponseEntity<ResponseStructure<List<Student>>> getallstudents() {
		List<Student> list=service.getallstudents();
		ResponseStructure <List<Student>> res=new ResponseStructure<>(200,"all students retrived successfully",list);
		return new ResponseEntity<>(res,HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<ResponseStructure<Student>> studentbyid(@PathVariable long id){
		Student s=service.getbyid(id);
		ResponseStructure <Student> response=new ResponseStructure<>(200,"student found",s);
		return new ResponseEntity<>(response,HttpStatus.OK);
		
	}
	@PutMapping("/update/{id}")
	public ResponseEntity<ResponseStructure<Student>> updatebyid(@PathVariable long id,@RequestBody StudentDto studentdto) {
		Student s=service.updatebyid(id,studentdto);
		ResponseStructure<Student> response=new ResponseStructure<>(200," student retrived ",s);
		return new ResponseEntity<>(response,HttpStatus.OK);
	}
	
	@DeleteMapping("/deletebyid/{id}")
	public ResponseEntity<ResponseStructure<String>> deletebyid(@PathVariable long id) {
		String student=service.deletebyid(id);
		ResponseStructure<String> response=new ResponseStructure<>(200,"student deleted successfully",student);
		return new ResponseEntity<>(response,HttpStatus.OK);
	}
	
}
