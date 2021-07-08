package co.kesti.kmapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class KmappController {
    @GetMapping("/")
    public String kmapp() { return "kmapp";}
}
