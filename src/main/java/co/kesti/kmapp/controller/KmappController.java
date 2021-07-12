package co.kesti.kmapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/page")
public class KmappController {

    @GetMapping("/kmapp")
    public String kmapp() { return "page/kmapp";}

    @GetMapping("/dnsc")
    public String dnsc() { return "page/dnsc";}
}
