package com.example.employee_creator;

import java.util.Arrays;

import org.junit.jupiter.api.Test;
import static org.mockito.BDDMockito.given;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.example.employee_creator.controller.EmployeeController;
import com.example.employee_creator.dto.EmployeeDTO;
import com.example.employee_creator.service.EmployeeService;

@WebMvcTest(EmployeeController.class)
public class EmployeeControllerWebLayerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private EmployeeService employeeService;

    @Test
    public void shouldReturnAllEmployees() throws Exception {
        EmployeeDTO employee = new EmployeeDTO();
        employee.setFirstName("John");
        employee.setLastName("Doe");

        given(employeeService.getAllEmployees()).willReturn(Arrays.asList(employee));

        this.mockMvc.perform(get("/employees"))
                .andExpect(status().isOk())
                .andExpect(content().json("[{'firstName':'John', 'lastName':'Doe'}]"));
    }
}
