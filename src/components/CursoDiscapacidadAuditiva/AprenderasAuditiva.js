import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

export default function AprenderasAuditivaComponent() {
    return (
        <div>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <EmojiPeopleIcon fontSize='large' />
                    </ListItemIcon>
                    Entenderás el concepto de Discapacidad Auditiva.
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <EmojiPeopleIcon fontSize='large' />
                    </ListItemIcon>
                    Obtendrás las habilidades para comunicarte con personas con discapacidad auditiva.
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <EmojiPeopleIcon fontSize='large' />
                    </ListItemIcon>
                    Sabrás aplicar todos los conocimientos para dar cátedra a un grupo con discapacidad auditiva.
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <EmojiPeopleIcon fontSize='large' />
                    </ListItemIcon>
                    Generarás empatía y conciencia con grupos con discapacidad auditiva.
                </ListItem>
            </List>
        </div>
    );
}