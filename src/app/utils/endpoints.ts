import { environment } from "../../environments/environment.development";
export const endpoints = {
// *** Estudiantes ***
agregarEstudiante:
environment.serverURL.concat('api/estudiante/agregarEstudiante'),
actualizarEstudiante:
environment.serverURL.concat('api/estudiante/actualizarEstudiante/:idEstudiante'),
eliminarEstudiante:
environment.serverURL.concat('api/estudiante/eliminarEstudiante/:idEstudiante'),
obtenerEstudiantePorID:
environment.serverURL.concat('api/estudiante/obtenerEstudiantePorID/:idEstudiante'),
obtenerEstudiantes:
environment.serverURL.concat('api/estudiante/obtenerEstudiantes')
// ***********************
};