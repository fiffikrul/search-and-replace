import React from 'react';
import { Content, ListRow, Title } from './Styles';


interface ListItemProps {
    title: string;
    content: JSX.Element | JSX.Element[] | string;
}

export const ListItem = (props: ListItemProps) => {

    return (
        <ListRow>
            <Title>
                {props.title}
            </Title>
            <Content>
                {props.content}
            </Content>
        </ListRow>
    );
}
