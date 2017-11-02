/* 페이지 컨트롤러와 서비스 객체 준비
 * - Spring MVC에서 사용할 JSP 엔진 준비 
 *   => build.gradle에 톰캣 JSP 엔진 라이브러리 추가
 *      compile("org.apache.tomcat.embed:tomcat-embed-jasper");
 *   => build.gradle에 톰캣 JSTL 라이브러리 추가
 *      compile group: 'javax.servlet', name: 'jstl', version: '1.2'
 *   
 * - 서비스 객체 준비
 *   => bigdata3.service 패키지에 인터페이스 작성 
 *   => bigdata3.service.impl 패키지에 인터페이스 구현체 작성
 *   
 * - 페이지 컨트롤러 준비
 *   => bigdata3.web 패키지에 클래스 작성
 *   
 * - JSP 페이지 준비
 *   => /webapp/WEB-INF/jsp/ 폴더에 JSP 작성
 * 
 * - HTML 파일 준비
 *   => /resources/static 폴더에 HTML 작성
 *   
 * - JSP URL에 대해 접두사, 접미사 설정하기
 *   => application.properties 파일에 다음 프로퍼티를 추가한다.
 *      spring.mvc.view.prefix=/WEB-INF/jsp/
 *      spring.mvc.view.suffix=.jsp
 */

package login;

import javax.sql.DataSource;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement // 트랜잭션 관리 객체 생성 
@MapperScan("login.dao") // DAO 인터페이스로부터 클래스 자동 생성
public class Application {

  @Bean 
  @ConfigurationProperties("app.datasource")
  public DataSource dataSource() {
    return DataSourceBuilder.create().build();
  }

  public static void main(String[] args) throws Exception {
    SpringApplication.run(Application.class, args);
  }

}