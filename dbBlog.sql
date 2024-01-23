CREATE TABLE Entradas
   (
      id_entrada int IDENTITY(1,1) PRIMARY KEY,
      titulo varchar(255) NOT NULL,
	  autor varchar(255) NOT NULL,
	  fecha_creacion datetime DEFAULT GETDATE(),
	  contenido text
   );