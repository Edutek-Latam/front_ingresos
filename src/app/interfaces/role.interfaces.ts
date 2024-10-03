import { Permiso } from "./permisos.interfaces";

export interface Role {
    id:          string;
    name:        string;
    description: string;
    isActive:    boolean;
    permissions: Permiso[];
}

