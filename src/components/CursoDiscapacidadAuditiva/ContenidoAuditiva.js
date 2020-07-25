import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SchoolIcon from '@material-ui/icons/School';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

export default function ContenidoAuditivaComponent() {
    return (
        <div>
            <div align='left'>
                <h1>
                    Requisitos
                </h1>
                <ul>
                    <li>
                        Contar con la actitud para completar el curso.
                    </li>
                    <li>
                        Ser responsable con las entregas y con las clases.
                    </li>
                </ul>
                <h1>
                    Contenido
                    <SchoolIcon fontSize='large'/>
                </h1>
            </div>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <AssignmentTurnedInIcon fontSize='large'/>
                    </ListItemIcon>
                    Acercamiento a la Discapacidad Auditiva.
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AssignmentTurnedInIcon fontSize='large'/>
                    </ListItemIcon>
                    Conocimiento y entendimiento de los procesos de escolarización.
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AssignmentTurnedInIcon fontSize='large'/>
                    </ListItemIcon>
                    Sistemas alternativos de comunicación y cómo aplicarlos en el aula.
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AssignmentTurnedInIcon fontSize='large'/>
                    </ListItemIcon>
                    Las habilidades sociales con la discapacidad auditiva.
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AssignmentTurnedInIcon fontSize='large'/>
                    </ListItemIcon>
                    Orientación vocacional, formación profesional e integración laboral.
                </ListItem>
            </List>
        </div>
    );
}