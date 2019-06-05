drop database if exists esquiter;
create database esquiter;
use esquiter;

# # # # # # # # # # # CREACION DE TABLAS # # # # # # # # # # # # #

create table USUARIO(
	id_Usuario int(7) auto_increment,
    tipo_Usuario varchar(20) not null,
	correo_Usuario varchar(60) not null,
    pass_Usuario varchar(30) not null,
    key(id_Usuario),
    
    constraint PK_USUARIO primary key(correo_Usuario)
);

create table DOCTOR(
	id_Doctor int(7) auto_increment,
    nombre_Doctor varchar(100) not null,
    correo_Usuario_Doctor varchar(60) not null,
    cedula_Doctor varchar(9) not null,
    
    constraint PK_DOCTOR primary key(id_Doctor),
    constraint FK_DOCTOR_USUARIO foreign key(correo_Usuario_Doctor) references USUARIO(correo_Usuario)
);

create table PACIENTE(
	id_Paciente int(7) auto_increment,
    id_Doctor_Paciente int(7) not null,
    nombre_Paciente varchar(100) not null,
    genero_Paciente varchar(10) not null,
    fechaNacimiento_Paciente datetime not null,
    telefono_Paciente varchar(10) not null,
    correo_Usuario_Paciente varchar(60) not null,
    ruta_Paciente varchar(20) not null,
    temp_Paciente varchar(30) not null,
    
    constraint PK_PACIENTE primary key(id_Paciente),
    constraint FK_PACIENTE_DOCTOR foreign key(id_Doctor_Paciente) references DOCTOR(id_Doctor),
    constraint FK_PACIENTE_USUARIO foreign key(correo_Usuario_Paciente) references USUARIO(correo_Usuario)
);

create table JUEGO(
	id_Juego int(7) auto_increment,
    nombre_Juego varchar(30) not null,
    
    constraint PK_JUEGO primary key(id_Juego)
);

create table ESTADISTICA(
	id_Estadistica int(7) auto_increment,
    id_Paciente_Estadistica int(7) not null,
    puntaje_Estadistica double(7,3) not null,
    id_Juego_Estadistica int(7) not null,
    
    constraint PK_ESTADISTICA primary key(id_Estadistica),
    constraint FK_ESTADISTICA_JUEGO foreign key(id_Paciente_Estadistica) references PACIENTE(id_Paciente),
    constraint FK_ESTADISTICA_PACIENTE foreign key(id_Juego_Estadistica) references JUEGO(id_Juego)
);


# # # # # # # # # # # CREACION DE PA # # # # # # # # # # # # #

-- Insertar Doctor
drop procedure if exists insertar_Doctor;
delimiter $$
	create procedure insertar_Doctor(in nom varchar(100), in corr varchar(60), in ced varchar(9))
    begin
		insert into Doctor(nombre_Doctor, correo_Usuario_Doctor, cedula_Doctor) values (nom, corr, ced);
    end $$
delimiter ;

-- Insertar Paciente
drop procedure if exists insertar_Paciente;
delimiter $$
	create procedure insertar_Paciente(in id_Usr int(7), in nom varchar(100), in gen varchar(10), in fec datetime, in tel varchar(10), in corr varchar(60), in rut varchar(20), in tem varchar(30))
    begin
		insert into PACIENTE(id_Doctor_Paciente, nombre_Paciente, genero_Paciente, fechaNacimiento_Paciente, telefono_Paciente, correo_Usuario_Paciente, ruta_Paciente, temp_Paciente) 
        values (id_Usr, nom, gen, fec, tel, corr, rut, tem);
    end $$
delimiter ;

-- Insertar Estadistica
drop procedure if exists insertar_Estadistica;
delimiter $$
	create procedure insertar_Estadistica(in id_Pac int(7), in pun double(7,3), in id_J int(7))
    begin
		insert into Estadistica(id_Paciente_Estadistica, puntaje_Estadistica, id_Juego_Estadistica) values (id_Pac, pun, id_J);
    end $$
delimiter ;

-- Buscar Sesion Doctor en la base de datos
drop procedure if exists getSesionDoctor;
delimiter $$
	create procedure getSesionDoctor(in correo varchar(60), in pass varchar(30))
    begin
		select Doctor.nombre_Doctor from Usuario join Doctor 
        on Usuario.correo_Usuario = Doctor.correo_Usuario_Doctor
        where correo = Usuario.correo_Usuario and pass = Usuario.pass_Usuario;
    end $$
delimiter ;

-- Buscar Sesion Paciente en la base de datos
drop procedure if exists getSesionPaciente;
delimiter $$
	create procedure getSesionPaciente(in correo varchar(60), in pass varchar(30))
    begin
		select Paciente.nombre_Paciente from Usuario join Paciente
        on Usuario.correo_Usuario = Paciente.correo_Usuario_Paciente
        where correo = Usuario.correo_Usuario and pass = Usuario.pass_Usuario;
    end $$
delimiter ;

-- Insertar Juego
drop procedure if exists insertar_Juego;
delimiter $$
	create procedure insertar_Juego(in nom_J varchar(30))
    begin
		insert into Juego(nombre_Juego) values (nom_J);
    end $$
delimiter ;

-- Obtener la información de los pacientes
    drop procedure if exists getDataPacientes;
    delimiter $$
        create procedure getDataPacientes()
        begin
            select Paciente.nombre_Paciente, DATE_FORMAT(Paciente.fechaNacimiento_Paciente, '%Y') as fecha_Paciente, Paciente.genero_Paciente, Paciente.telefono_Paciente, Paciente.correo_Usuario_Paciente, Paciente.ruta_Paciente, Paciente.id_Paciente
            from Paciente;
        end $$
    delimiter ;
    
-- Obtener la información de los pacientes
drop procedure if exists getEstadisticaPaciente;
delimiter $$
	create procedure getEstadisticaPaciente(in correo varchar(60))
	begin
		select Estadistica.id_Estadistica, Estadistica.puntaje_Estadistica from Estadistica where Estadistica.id_Paciente_Estadistica = (select Paciente.id_Paciente from Paciente where Paciente.correo_Usuario_Paciente = correo);
	end $$
delimiter ;

-- Obtener la información de los pacientes
drop procedure if exists getModalPaciente;
delimiter $$
	create procedure getModalPaciente(in paciente int(7))
	begin
		select Estadistica.id_Juego_Estadistica from Estadistica where Estadistica.id_Paciente_Estadistica = paciente;
	end $$
delimiter ;


# # # # # # # # # # # CREACION DE TRIGGERS # # # # # # # # # # # # #

-- Dar de alta un Usuario antes de Doctor
drop trigger if exists trigger_usuario_Doctor;
delimiter $$
	create trigger trigger_usuario_Doctor before insert on DOCTOR
    for each row
		begin
			insert into USUARIO(tipo_Usuario, correo_Usuario, pass_Usuario) values('Doctor', new.correo_Usuario_Doctor, new.correo_Usuario_Doctor);
		end $$
delimiter ;

-- Dar de alta un Usuario antes de Paciente
drop trigger if exists trigger_usuario_Paciente;
delimiter $$
	create trigger trigger_usuario_Paciente before insert on PACIENTE
    for each row
		begin
			insert into USUARIO(tipo_Usuario, correo_usuario, pass_usuario) values('Paciente', new.correo_Usuario_Paciente, new.temp_Paciente);
		end $$
delimiter ;


# # # # # # # # # # # INSERCIONES DE EJEMPLO # # # # # # # # # # # # #
call insertar_Doctor('Enoc Martínez', 'actec_147@hotmail.com', 'CED213');
call insertar_Paciente(1, 'Miguel Ángel San Martín', 'Masculino', '2008-07-14', '8334375144', 'sanma@algo.com', 'hombre.png', '23MS877');
-- select DOCTOR.nombre_Doctor, PACIENTE.nombre_Paciente from PACIENTE join DOCTOR on PACIENTE.id_Doctor_Paciente = DOCTOR.id_Doctor;
select * from Usuario;

call getSesionDoctor('enoc.9714@gmail.com','enoc.9714@gmail.com');
call getSesionPaciente('sanma@algo.com','23MS877');
call insertar_Juego('Series de Colores');
call getEstadisticaPaciente('miguel_spy@hotmail.com');
call getModalPaciente(1);
select * from Estadistica