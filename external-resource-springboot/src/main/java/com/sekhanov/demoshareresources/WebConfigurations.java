package com.sekhanov.demoshareresources;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfigurations implements WebMvcConfigurer {
    public static String uploadDirectory = System.getProperty("user.home") + "\\images";

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
            // будут расшарены файлы по пути http://localhost:8080/external/
            .addResourceHandler("/external/**")
            // файлы из следующих папок будут доступны по именам с адреса url выше. Например 
            // файл из папки c:\coder\tmp\imagestore\img\1.jpg будет здесь http://localhost:8080/external/img/1.jpg
            // еще пример - d:\Downloads\typeInJs.png - http://localhost:8080/external/typeInJs.png
            .addResourceLocations("file:///c:\\coder\\tmp\\imagestore\\")
            .addResourceLocations("file:///d:\\Downloads\\");
    }
}