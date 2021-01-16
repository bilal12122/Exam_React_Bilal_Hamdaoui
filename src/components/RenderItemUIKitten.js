import React from 'react';
import {Button, ListItem} from "@ui-kitten/components";

const RenderItemUIKitten = ({ element}) => {

    const renderItemAccessory = (props) => (
        <Button size='tiny'>FOLLOW</Button>
    );

    return(
        <ListItem
            title={element.name}
            accessoryRight={renderItemAccessory}
        />
    );
}

export default RenderItemUIKitten;
