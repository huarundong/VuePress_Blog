
pom.xml文件引入security
```xml
<!--security-->
<dependency>  
    <groupId>org.springframework.boot</groupId>  
	<artifactId>spring-boot-starter-security</artifactId>  
</dependency>
```

引入swagger
```xml
<!-- Swagger -->
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger-ui</artifactId>
    <version>2.6.0</version>
</dependency>
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger2</artifactId>
    <version>2.6.0</version>
</dependency>
```


properties文件配置
```properties
spring.security.basic.path=/swagger-ui.html
spring.security.basic.enabled=true
spring.security.user.name=huarundong
spring.security.user.password=123456
```
