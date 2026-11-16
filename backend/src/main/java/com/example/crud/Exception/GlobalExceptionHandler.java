package com.example.crud.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.example.crud.Controller.ResponseStructure;

@RestControllerAdvice
public class GlobalExceptionHandler {
	@ExceptionHandler(StudentNotFoundException.class)
		public ResponseEntity<ResponseStructure<String>> handlestudentnotfound(StudentNotFoundException ex) {
			ResponseStructure<String> response=new ResponseStructure<>(404,ex.getMessage(),null);
			return new ResponseEntity<>(response,HttpStatus.NOT_FOUND);
			
		}
}
