import React from 'react';
import parse from 'html-react-parser';
import { Content, ListRow, Title } from './Styles';


interface ListItemProps {
    title: string;
    content: string;
}

export const ListItem = (props: ListItemProps) => {

    const parsedContent = parse(props.content)

    return (
        <ListRow>
            <Title>
                {props.title}
            </Title>
            <Content>
                {parsedContent}
            </Content>
        </ListRow>
    );
}
