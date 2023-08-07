package com.example.demo;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class courseController {

	@RequestMapping("course")
	public ModelAndView course(@RequestParam("cname")String coursename){
		ModelAndView mv = new ModelAndView();
		mv.addObject("cname",coursename);
		mv.setViewName("course");
		return mv;
	}







//	@RequestMapping("/course")
//	@ResponseBody
//	public String course(HttpServletRequest req) {
//		HttpSession session = req.getSession();
//		String cname = req.getParameter("cname");
////		System.out.println("Course name is "+cname);
//		session.setAttribute("cname",cname);
//		return "course";
//	}
}