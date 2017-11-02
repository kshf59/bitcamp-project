package login.control;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/main")
public class controller {
  @RequestMapping("form")
  public void form() {}
}
