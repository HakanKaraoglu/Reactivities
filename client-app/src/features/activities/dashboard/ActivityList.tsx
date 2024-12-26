import React from "react";
import {Activity} from "../../../app/models/activity.ts";
import {Button, Item, ItemContent, Label, Segment} from "semantic-ui-react";

interface Props {
    activity: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityList({activity, selectActivity, deleteActivity}: Props): JSX.Element {
    return (
        <Segment>
            <Item.Group divided>
                {activity.map(activity => (
                    <Item key={activity.id}>
                        <ItemContent>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectActivity(activity.id)} floated='right' content='View' color='blue'/>
                                <Button onClick={() => deleteActivity(activity.id)} floated='right' content='Delete' color='red'/>
                                <Label basic content={activity.category}/>
                            </Item.Extra>
                        </ItemContent>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}