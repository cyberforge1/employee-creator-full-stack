//EmployeeControllerIntegrationTest.java

// package com.example.employee_creator;

// import static org.assertj.core.api.Assertions.assertThat;
// import org.junit.jupiter.api.Test;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.test.context.SpringBootTest;
// import org.springframework.boot.test.web.client.TestRestTemplate;
// import org.springframework.boot.test.web.server.LocalServerPort;

// import com.example.employee_creator.dto.EmployeeDTO;

// @SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
// public class EmployeeControllerIntegrationTest {

//     @LocalServerPort
//     private int port;

//     @Autowired
//     private TestRestTemplate restTemplate;

//     @Test
//     public void shouldReturnAllEmployees() throws Exception {
//         String url = "http://localhost:" + port + "/employees";
//         EmployeeDTO[] employees = this.restTemplate.getForObject(url, EmployeeDTO[].class);
//         assertThat(employees).isNotEmpty();
//     }
// }
